import {HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, finalize } from 'rxjs/operators';
@Injectable()

export class loggerInterceptor implements HttpInterceptor{
  intercept(request:HttpRequest<any>,next:HttpHandler){
    const requestTime = Date.now();
    let ok:string;


    return next.handle(request).pipe(
      tap(
        event => event instanceof HttpResponse ? 'succeeded' : '',
        error => ok = 'failed'
      ),
      finalize(()=>{
        const elapsed = Date.now() - requestTime;
        const msg = 'request ' + request.method + 'ends ' + ok + 'with time difference ' + elapsed;
        console.log(msg);
      }

      )
    )
    ;
  }
}

