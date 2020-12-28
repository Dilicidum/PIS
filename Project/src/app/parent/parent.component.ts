import { Component, OnInit,Pipe,Output,EventEmitter } from '@angular/core';
import {FormControl, FormControlName, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { person } from '../models/person';
import { Observable, of, from,interval, pipe } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter,map,take} from 'rxjs/operators';
import { PeopleService } from '../people.service';
import {FlexLayoutModule} from '@angular/flex-layout';
export type EditorType = 'full' | 'profile'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  people : person[] = [

  ]
  example = of(1,2,4)
  person:person = {
    firstName:'Oleg',
    lastName:'Skrypin'
  }

  numArray:Number[]=[]
  users:string[]
  constructor(private fb:FormBuilder,private peopleService:PeopleService) { }
  messages$:Observable<Number[]>
  ngOnInit(): void {

  }

  onSubmit(){
    this.peopleService.get().subscribe(data=>this.numArray = data);
  }

  myForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    aliases:this.fb.array([
    ])
  })

  get aliases(){
    return this.myForm.get('aliases')as FormArray;
  }

  addAlias(){

    this.aliases.push(this.fb.control(''));
  }

  editor:EditorType='profile';
  toggleType(editorType:EditorType){
    this.editor = editorType;
  }

  get showProfileForm(){
    return this.editor === 'profile';
  }

  get showFullForm(){
    return this.editor === 'full';
  }

}
