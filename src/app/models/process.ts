export class Process {
    identifier: string;
    jobControlOptions: string;
    outputTransmission: string;
  
  constructor(public identifier_: string, public jobControlOptions_: string, public outputTransmission_: string){
    this.identifier=identifier_;
    this.jobControlOptions=jobControlOptions_;
    this.outputTransmission=outputTransmission_;
   };
  }