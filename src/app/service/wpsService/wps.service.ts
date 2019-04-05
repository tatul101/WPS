import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import  xml2js from 'xml2js';
import { Capability } from 'src/app/models/capability';
import { Process } from 'src/app/models/process';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WPSService {

  capabilities: Capability;
  processes: Process[];

  constructor(private  httpClient:  HttpClient,
              @Inject('Url') @Optional() public Url?: string,
              @Inject('Version') @Optional() public Version?: string) {
                console.log(Url);
          this.Url=Url;
          this.Version=Version;
          this.processes=[];
  }

  async getCapabilities() {
    var result_to_send;
    let data = await this.httpClient.get(this.Url, {responseType: 'text'})
                         .toPromise()
                         .then(res => data=res);
        if(data != null){
          var parser = new xml2js.Parser();
          result_to_send = await new Promise((resolve, reject) => parser.parseString(data, (err, result) => {
                if (err) {
                  reject(err);
                }else {
                  let iterable = result["wps:Capabilities"]["wps:Contents"][0]["wps:ProcessSummary"];
                  let len = iterable.length;
                  console.log(`length of result set : ` + len);
                  for(var i=0;i<len;i++){
                    let identifier = result["wps:Capabilities"]["wps:Contents"][0]["wps:ProcessSummary"][i]["ows:Identifier"][0];
                    let jobControlOptions =result["wps:Capabilities"]["wps:Contents"][0]["wps:ProcessSummary"][i]["$"]["jobControlOptions"];
                    let outputTransmission = result["wps:Capabilities"]["wps:Contents"][0]["wps:ProcessSummary"][i]["$"]["outputTransmission"];
                   var process= new Process(
                     identifier,
                     jobControlOptions,
                     outputTransmission
                    );
                    this.processes.push(process);
                  }
                  this.capabilities=new Capability(this.processes);
                 console.log("=========Capabalities Object=========");
                 console.log(this.capabilities);
                 console.log("=========End Of Capabalities Object========="); 
                 resolve(this.capabilities);
                }
              }));          
        } else {
            result_to_send = null;
        }
        return result_to_send;
    }
}