import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private http:HttpClient) { }

  employees():Observable<Employee[]>{
    let result = this.http.get<Employee[]>('http://localhost:51028/Employeers')
    return result.pipe(
      map(res=>{
        res.forEach(x => x.name = x.firstName + x.lastName)
        return res;
      })
    );
  }

}
