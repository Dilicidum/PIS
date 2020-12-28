import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userRegisterModel } from '../models/userRegisterModel';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegiserService {
  baseUrl:string='http://localhost:51028/';
  constructor(private http:HttpClient) { }

  register(user:userRegisterModel):Observable<any>{
    return this.http.post('http://localhost:51028/Registration',user)
  }

}
