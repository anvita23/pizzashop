import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private data: DataService) { }
  
  
  ngOnInit(): void {
  }
  submitted = false
  keyexists: boolean = false
  addUser() {
    this.keyexists = false
    for (let i = 0; i < this.data.users.length; i++) {
      if (this.data.users[i].email == this.user.email || this.data.users[i].mobile == this.user.mobile) {
        this.keyexists = true
        alert("Email already registered")
        break
      }
    }
    if (this.keyexists == false) {
      this.data.setUser(this.user)
      alert("User successfully registered")
      this.user = new User()
      console.log(this.data.users)
      this.submitted = true
      this.router.navigate(['login']);
    }

  }
  gotologin() {
    this.router.navigate(['login']);
  }

}
