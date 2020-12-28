import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {person} from '../app/models/person';
import { Observable, throwError,of } from 'rxjs';
import { Http,Response } from '@angular/http';
import {map, catchError, retry, tap, shareReplay} from 'rxjs/operators';

import { NgControlStatus } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class PeopleService {

  constructor(private http:HttpClient) { }

  cache:number[];

  public get():Observable<number[]>{
    console.log(this.cache)
    if(this.cache){

      this.cache.map(data=>{
        data = data * 2;
        console.log('data = ',data)
      })
      console.log('this cahce = ',this.cache)
      return of(this.cache)
    }

    return this.http.get<number[]>('http://localhost:54355/api/Train').pipe(
      tap(value=>{
        this.cache = value;
      })

      )

  }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Something goes wrong on the client-side', error.error.message);
    }
    else{
      console.log('Something bad happened on the server, server status now: ',error.status
      + 'body was: ',error.error);
    }
    return throwError('Bad occures sometime');

  }

  addNumber(num:number[]):Observable<Number[]>{
    return this.http.post<Number[]>('http://localhost:54355/api/Train',num)
  }

  getLastNumber(index:number):Observable<Number>{

    const baseURL = 'http://localhost:54355/api/Train/' + index;

    return this.http.get<Number>(baseURL).pipe(
      catchError(this.handleError)
    );


  }

}
