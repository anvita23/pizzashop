import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }
  ordersuccessful=this.cart.items
  grandtotal(){
    var t:number=0;
    for(var j=0;j<this.cart.items.length;j++){
      t = t + this.cart.items[j].total;
    }
    return t;
    }

}
