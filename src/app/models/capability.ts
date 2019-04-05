import { Process } from 'src/app/models/process';

export class Capability{
  processes : Process [];
  constructor(processes_:Process[]){
    this.processes=processes_;
  };
 
}