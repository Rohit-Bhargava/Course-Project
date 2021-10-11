import { Ingradient } from "../shared/ingradient.model";

export class Recipe{
    public discription: string;
    public name: string;
    public img: string;
    public ingradients: Ingradient[]
  ingradient: Ingradient;
  imagePath: string;

    constructor(discription: string, name: string, img: string, ingradients: Ingradient[]){
        this.discription=discription;
        this.name=name;
        this.img=img;
        this.ingradients=ingradients;
    }
}