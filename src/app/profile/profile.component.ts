import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { User } from '../user/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private data:DataService ,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
edituser:User=new User()
 userdetails=this.auth.getLoginUser()

 

 
 logoutuser(){
   this.auth.logout()
 }
 update:boolean=false;
 changeduser:boolean=false;
isupdate(){
  this.update=true;
}
 updateuser(){
this.edituser.email=this.userdetails!.email;
 this.data.updateUser(this.edituser);
 this.userdetails=this.edituser;
 this.auth.currentUser=this.userdetails;
 this.changeduser=true;
 console.log(this.data.users);
 this.router.navigateByUrl('profile')

 }


}
 
