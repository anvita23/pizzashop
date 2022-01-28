import { Component, OnInit } from '@angular/core';
import { Food } from '../food/food';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private cart:CartService) { }
  getMenutype:any
  menutype:any
  ngOnInit(): void {
    this.getMenutype=this.param.snapshot.paramMap.get('id')
    if(this.getMenutype){
      this.menutype=this.getMenutype;
    }
  }
    vegpizza:Food[]=[
      {name:"Margherita",description:"A hugely popular margherita, with a deliciously tangy single cheese topping",price:300,image:"https://www.dominos.co.in/files/items/Margherit.jpg"},
      {name:"FarmHouse",description:"A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",price:600,image:"https://www.dominos.co.in/files/items/Farmhouse.jpg"},
      {name:"Peppy Paneer",description:"Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",price:500,image:"https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"},
      {name:"Veg Extravaganza",description:"A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",price:800,image:"https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg"}
    ]
    nonvegpizza:Food[]=[
      {name:"Pepper Barbeque Chicken",description:"Pepper Barbecue Chicken I Cheese",price:305,image:"https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg"},
      {name:"Non Veg Supreme",description:"Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",price:700,image:"https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg"},
      {name:"Chicken Dominator",description:"Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers",price:600,image:"https://www.dominos.co.in/files/items/Dominator.jpg"},
      {name:"Pepper Barbecue Onion",description:"Pepper Barbecue Chicken and Onion",price:650,image:"https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg"}
    ]
    sides:Food[]=[
      {name:"Garlic Breadsticks",description:"",price:200,image:"https://www.dominos.co.in/files/items/046015%20garlic%20bread_1346075642.jpg"},
      {name:"Stuffed Garlic",description:"",price:250,image:"https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.jpg"},
      {name:"Pepsi (500ml)",description:"",price:100,image:"https://www.dominos.co.in/files/items/pepsi.png"},
      {name:"Ice tea(250ml)",description:"",price:100,image:"https://www.dominos.co.in/files/items/lipton.png"},
    ]
    pasta:Food[]=[
      {name:"Moroccan Pasta",description:"",price:250,image:"https://images.dominos.co.in/MoroccanPastaNonVeg.jpg"},
      {name:"Tikka Masala Pasta",description:"",price:250,image:"https://www.dominos.co.in/files/items/PaneerTikkaMasala_N.jpg"},
      {name:"Jalapeno Pasta",description:"",price:250,image:"https://www.dominos.co.in/files/items/JalapenoVeg.jpg"},
      {name:"Cheesy Pasta",description:"",price:250,image:"https://images.dominos.co.in/MoroccanPastaNonVeg.jpg"},
    ]
  addtocart(x:Food){ 
    var index = this.cart.items.findIndex(elem => elem.name == x.name)
    if (index === -1) {
      this.cart.setitem({
        name: x.name,
        qty: 1,
        price: x.price,
        total: x.price,
        image:x.image
      });
    }
    else {
      this.cart.getitem()[index].qty++;
      this.cart.getitem()[index].total = this.cart.getitem()[index].price * this.cart.getitem()[index].qty;
    }
    
    this.updateCartTotal();
    console.log(this.cart.items)
  }

  
  updateCartTotal() {
    let total = 0;
    this.cart.items.map(elem => total = total + elem.qty * elem.price);
    return total;
  }
  
  getshoppingcart(){
  return this.cart.items
  }
 
  
   
}
