import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function whiteForbiddenHere(value:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} | null=>{
    const fuck = value.test(control.value);
    return fuck ? {'trainspotting':{value:control.value}}:null;
  }
}

@Directive({
  selector: '[appWhiteForbidden]'
})



export class WhiteForbiddenDirective {

  constructor() { }

}
