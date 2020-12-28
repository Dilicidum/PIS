import { ValidationErrors, FormGroup, ValidatorFn } from '@angular/forms';

export function nameAndSurname(name:RegExp):ValidatorFn{
  return function(group:FormGroup):ValidationErrors | null {
    const name = group.get('firstName');
    const surname = group.get('lastName');
    return name && surname && name.value === 'Kostya' && surname.value==='Novytskyi' ? {'identityRevealed':true}:null;
  }
}
