import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {interfegwer} from '../shared/angular-interceptor';
import { loggerInterceptor } from './logger-interceptor';

export const httpInterceptorProviders=[
  {provide:HTTP_INTERCEPTORS,useClass:interfegwer,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:loggerInterceptor,multi:true}
]
