import { Food } from "../food/food";
export class Cartitem {
    name: string;
    price:number;
    qty:number;
    total:number;
    image:string
    constructor(product:Food){
        this.name=product.name;
        this.price=product.price;
        this.qty=1;
        this.total=0;
        this.image=""
    }
}



