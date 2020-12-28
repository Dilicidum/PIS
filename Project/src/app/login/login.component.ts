import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { userLoginModel } from '../models/userLoginModel';
import { routes } from '../routes';
import { error } from 'protractor';
import { UserService } from '../services/user.service';
import {flatMap} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userLoginModel : userLoginModel = {userName : '',password : ''};
  constructor(private router:Router,private authService:AuthenticationService,private userService:UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl(''),
      'password': new FormControl(''),
    })
  }

  onSubmit(){
    this.userLoginModel.userName = this.loginForm.get('userName').value;
    this.userLoginModel.password = this.loginForm.get('password').value;

    this.authService.login(this.userLoginModel).subscribe(data=>{
      console.log('data = ',data);
      this.router.navigateByUrl('/employees')
    })

  }

}
