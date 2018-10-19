export class Car {
  public constructor(
    public brand:string,
    public name:string,
    public date:Date,
    public id?:number,
    public isSold:boolean=false
  ){}
}

export interface ICars {
   cars:Car[]
}
