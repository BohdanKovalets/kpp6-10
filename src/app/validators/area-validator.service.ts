import { AbstractControl, ValidationErrors } from '@angular/forms';

export function areaValidator(control: AbstractControl): ValidationErrors | null {
  const value = Number(control.value);

  if (isNaN(value) || value < 20 || value > 500) {
    return { areaInvalid: true };
  }

  return null; 
}
