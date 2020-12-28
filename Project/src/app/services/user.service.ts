import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url:string='http://localhost:51028/api/Users';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

}
