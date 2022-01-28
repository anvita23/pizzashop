import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartitem } from '../cartitem/cartitem';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }
shoppingcart=this.cart.items
delete(x:Cartitem){
  var index = this.shoppingcart.findIndex(elem => elem.name == x.name)
  if(this.shoppingcart[index].qty == 0){
   this.shoppingcart.splice(index,1)
  }
  else{
    this.shoppingcart[index].qty--;
  }
  this.shoppingcart[index].total = this.shoppingcart[index].price * this.shoppingcart[index].qty;
  this.updatecart();
  this.grandtotal();
}
updatecart() {
  let total = 0;
  this.cart.items.map(elem => total = total + elem.qty * elem.price);
  return total;
}
grandtotal(){
  var t:number=0;
  for(var j=0;j<this.cart.items.length;j++){
    t = t + this.cart.items[j].total;
  }
  return t;
  }
}
