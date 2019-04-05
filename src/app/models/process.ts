export class Process {
    identifier: string;
    jobControlOptions: string;
    outputTransmission: string;
  
  constructor(identifier_: string,jobControlOptions_: string,outputTransmission_: string){
    this.identifier=identifier_;
    this.jobControlOptions=jobControlOptions_;
    this.outputTransmission=outputTransmission_;
   };
  }