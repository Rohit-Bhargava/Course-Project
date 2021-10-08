import { Ingradient } from "../shared/ingradient.model";

export class Recipe{
    public sno: number;
    public name: string;
    public img: string;
    public ingradients: Ingradient[]
  ingradient: Ingradient;

    constructor(sno: number, name: string, img: string, ingradients: Ingradient[]){
        this.sno=sno;
        this.name=name;
        this.img=img;
        this.ingradients=ingradients;
    }
}