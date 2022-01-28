import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }
  finalcart=this.cart.items
  grandtotal(){
    var t:number=0;
    for(var j=0;j<this.cart.items.length;j++){
      t = t + this.cart.items[j].total;
    }
    return t;
    }

}
