import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { User } from '../user/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private data: DataService) { }
  currentUser: User | null = null;
  found: User[] = []
  login(logInUser: User): boolean {
    let index=null;
    for(let i=0;i<this.data.users.length;i++){
      if(this.data.users[i].email==logInUser.email && this.data.users[i].password==logInUser.password){
        index=i
        break
      }
    }
    if(index!=null){
      this.currentUser = this.data.users[index]
      console.log("Found the User" + JSON.stringify(this.data.users[index]))
      return true
    }
    else
    return false;
  }
  logout() {
    this.currentUser = null;
    this.router.navigate(['']);
  }
  getLoginUser():User | null{
    return this.currentUser;
  }
  getauthenticationstatus():boolean{
    if(this.currentUser!=null){
      return true;
    }
    else
    return false;
  }
}
