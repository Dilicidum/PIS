import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { userRegisterModel } from '../models/userRegisterModel';
import { RegiserService } from '../services/regiser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  userRegisterModel: userRegisterModel = {};
  constructor(private registerService:RegiserService) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'firstName':new FormControl(''),
      'lastName':new FormControl(''),
      'userName':new FormControl(''),
      'password':new FormControl(''),
      'confirmPassword':new FormControl(''),
    })
  }

  onSubmit(){
    this.userRegisterModel.firstName = this.registerForm.get('firstName').value;
    this.userRegisterModel.lastName = this.registerForm.get('lastName').value;
    this.userRegisterModel.userName = this.registerForm.get('userName').value;
    this.userRegisterModel.password = this.registerForm.get('password').value;
    this.userRegisterModel.confirmedPassword = this.registerForm.get('confirmPassword').value;
    this.registerService.register(this.userRegisterModel).subscribe(data=>{
      console.log('data registeratrion component = ', data );
    })
    }

}
