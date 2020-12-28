import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenName(nameRe:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} | null =>{
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName':{value : control.value}} : null;
  }
}
