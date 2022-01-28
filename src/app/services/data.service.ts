import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[]=[]
  
  constructor() { }
  setUser(user1:User){
    this.users.push(user1);
  }
  getUser(){
    return this.users
  }
  updateUser(user: User) {
    const userIndex = this.users.findIndex(x => x.email == user.email);
    if (userIndex != null && userIndex != undefined) {
        this.users[userIndex] = user;
    }
}
removeUser(name: string) {
    this.users = this.users.filter(x => x.name != name);
}
}
