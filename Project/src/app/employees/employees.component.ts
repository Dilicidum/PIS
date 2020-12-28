import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { UserService } from '../services/user.service';
import { delay,flatMap, map, mergeMap, concatMap, switchMap,switchAll } from 'rxjs/operators';
import { Observable, of, Subject,from } from 'rxjs';

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit,OnChanges {
  loading:boolean = false;
  employees : Employee[]=[];

  constructor(private employeesService:EmployeesService,private userService:UserService) { }



  ngOnChanges(){

  }

  ngOnInit(): void {

    from([1,2,3,4]).pipe(
      map(param => getData(param))
    ).subscribe(val => val.subscribe(data => console.log(data)));

    // using map and switchAll
    from([1,2,3,4]).pipe(
      map(param => getData(param)),
      switchAll()
    ).subscribe(val => console.log(val));

    // using switchMap
    from([1,2,3,4]).pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));

  }

}
