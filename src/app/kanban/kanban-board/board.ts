export class Board {
    id: number;
    name: string;
    creation: Date;
    lastUpdate: Date;
    //columns: Column[] = [];
  
    constructor (id:number, name:string,creation = new Date()) {
      this.id = id;
      this.name = name;
      this.creation = creation;
      this.lastUpdate =  creation;
    }
  }