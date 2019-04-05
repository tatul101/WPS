import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Capability } from 'src/app/models/capability';
import { Process } from 'src/app/models/process';
import { WPSService } from  'src/app/service/wpsService/wps.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wps-demo-component',
  templateUrl: './wps-demo-component.component.html',
  styleUrls: ['./wps-demo-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
      {provide: 'Url',  useValue: 'http://geoprocessing.demo.52north.org/wps/WebProcessingService?Request=GetCapabilities&Service=WPS'}, 
      {provide: 'Version',     useValue: '2.0.0'},WPSService
  ],
})
export class WpsDemoComponent implements OnInit {
capabilities: Capability;
isDataAvailable: Boolean;
dataToShow: Boolean;

constructor(private wpsService: WPSService) {
}

ngOnInit(){
  this.isDataAvailable=false;
  this.dataToShow=false;
  this.getCapabilities();
}

public  getCapabilities(){
  this.wpsService.getCapabilities().then(capabilities => {
    this.capabilities = capabilities;
    if(this.capabilities.processes==null){
      console.log("null")
      this.isDataAvailable=true;
      this.dataToShow=false;
    } else {
        this.isDataAvailable=true;
        this.dataToShow=true;
    }
  });
}
}

