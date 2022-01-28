import { Component, OnInit } from '@angular/core';
import { Food } from '../food/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
categories=[
  {'id':1,'name':'Veg Pizza','description':'A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, its softer and tastier','image':'https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.jpg'},
  {'id':2,'name':'Non-veg Pizza','description':'Choose your favourite non-veg pizzas from the Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings','image':'https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.jpg'},
  {'id':3,'name':'Sides & Beverages','description':'Complement your pizza with wide range of sides & beverages available like garlic bread ,cold drinks and more','image':'../../assets/sides.jpg'},
  {'id':4,'name':'Pasta','description':'Choose your favourite pasta from the pasta menu. Get fresh non-veg pasta with your choice with creamy tomato and more.','image':'../../assets/pasta.jpg'},
]


}
