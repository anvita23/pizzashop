import { Injectable } from '@angular/core';
import { Cartitem } from '../cartitem/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Cartitem[]=[]
  
  constructor() { }
  setitem(item:Cartitem){
    this.items.push(item);
  }
  getitem(){
    return this.items
  }
 
  
}
