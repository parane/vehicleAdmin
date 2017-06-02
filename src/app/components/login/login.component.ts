import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname ='';
  password=''; 
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.loginService.validateLogin(this.uname, this.password).then((result) => {
      
      console.log('Sucessfully login');
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }
}
