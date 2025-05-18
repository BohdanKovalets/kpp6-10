import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CleaningServiceType } from '../models/types';
import { areaValidator } from '../validators/area-validator.service';
import { dateValidator } from '../validators/validator-date.service';

export function formConstructor(
  type: string,
  form: FormGroup,
  fb: FormBuilder
) {
  const controlsToRemove = ['rooms', 'squareMeters', 'floors', 'date', 'area'];
  controlsToRemove.forEach((control) => {
    if (form.contains(control)) {
      form.removeControl(control);
    }
  });

  if (type === CleaningServiceType.ApartmentCleaning) {
    form.addControl('rooms', fb.control('', [
      Validators.required,
      Validators.min(1),
    ]));
  }

  else if (type === CleaningServiceType.OfficeCleaning) {
    form.addControl('squareMeters', fb.control('', [
      Validators.required,
      Validators.min(10),
    ]));
  }

  else if (type === CleaningServiceType.WindowWashing) {
    form.addControl('floors', fb.control('', [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]));
    form.addControl('date', fb.control('', [
      Validators.required,
      dateValidator,
    ]));
  }

  else if (type === CleaningServiceType.DeepCleaning) {
    form.addControl('area', fb.control('', [
      Validators.required,
      areaValidator,
    ]));
  }
}
