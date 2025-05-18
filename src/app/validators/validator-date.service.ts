import { AbstractControl, ValidationErrors } from '@angular/forms';
import { StringToDate } from './string-to-date';

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return { dateInvalid: true };

  const arrD: string[] = value.split(/[.\-/]/);
  const arrDate: number[] = arrD.map(Number);
  arrDate[1] -= 1; 

  const d = StringToDate(value);

  const valid =
    d.getFullYear() === arrDate[2] &&
    d.getMonth() === arrDate[1] &&
    d.getDate() === arrDate[0] &&
    arrDate[2] > 1900;

  return valid ? null : { dateInvalid: true };
}
