import { Component, OnInit, ViewChildren, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { UserSingleComponent } from './user-single/user-single.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { forbiddenName } from '../shared/forbiddenName';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { nameAndSurname } from '../shared/nameAndSurnameValidator';
import { of, pipe, Observable, interval } from 'rxjs';
import { nextTick } from 'process';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService:UserService,private fb:FormBuilder) { }
  simpleForm:FormGroup;
  arr = of(1,2,3,4,5,6,7,8,9,10);

  observer = {
    next:value => console.log('value = ',value),
    error:error=>console.log(error),
    complete : ()=>console.log('completed')
  }

  ngOnInit(): void {
    const timer = interval(1000);
    timer.subscribe(data=>{
      console.log('data = ',data);
      
    })
    this.initForm();
  }

  user:any={};

  initForm(){
    this.simpleForm = this.fb.group({
      'firstName':this.fb.control('',[Validators.required,Validators.minLength(4),forbiddenName(/bob/i)]),
      'lastName':this.fb.control('',[Validators.required]),
      'nickName':this.fb.control('',[Validators.required,Validators.minLength(4)]),

    },{
      validators:nameAndSurname
    })
  }

  onSubmit(){
    this.user = this.simpleForm.getRawValue();
    console.log('this user = ',this.user);
  }


}
