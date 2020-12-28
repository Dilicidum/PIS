import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { person } from '../models/person';
import {FlexLayoutModule} from '@angular/flex-layout';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';
import { whiteForbiddenHere } from '../shared/white-forbidden.directive';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  profileForm:FormGroup;
  ngOnInit(): void {
    this.person = new person();
    this.profileForm = new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(4),forbiddenNameValidator()]),
      lastName: new FormControl('',[whiteForbiddenHere(/white/i)]),
    },{
    })
  }

  person:person;

  get firstName(){
    return this.profileForm.get('firstName');
  }

  get lastName(){
    return this.profileForm.get('lastName');
  }

  onSubmit(){
    this.person.firstName = this.profileForm.value.firstName;
    this.person.lastName = this.profileForm.value.lastName;
    console.log(this.profileForm.value.firstName);
  }



}
