import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator():ValidatorFn{
  return (control:AbstractControl):{[key:string]:any}|null=>{
    const testRegExpr = /white/i;
    const forbiddenName = testRegExpr.test(control.value);
    return forbiddenName? {'forbiddenName':{value:control.value}}:null;
  }
}

@Directive({
  selector: '[appForbiddenName]'
})

export class ForbiddenNameDirective {
  constructor() { }
}
