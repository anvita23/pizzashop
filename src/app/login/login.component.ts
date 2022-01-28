import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { User } from '../user/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data: DataService, private auth: AuthService) { }
  ngOnInit(): void {}
  user: User = new User();
  emailid: string = ""
  password: string = ""
  islogin:boolean=true
  check() {
    this.user.email = this.emailid
    this.user.password = this.password
    if (this.auth.login(this.user)==true) {
      console.log("User Found")
      this.islogin=true;
      this.router.navigateByUrl('profile')
    }
    else
      {
      this.islogin=false;
      console.log("Not Found")}
  }

}
