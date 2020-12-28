import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userLoginModel } from '../models/userLoginModel';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(userLoginModel:userLoginModel){
    return this.http.post('http://localhost:51028/api/Login',userLoginModel);
  }

}
