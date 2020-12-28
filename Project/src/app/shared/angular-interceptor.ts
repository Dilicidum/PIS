import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class interfegwer implements HttpInterceptor{
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
