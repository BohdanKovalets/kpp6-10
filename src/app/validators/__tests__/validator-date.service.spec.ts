import { dateValidator } from '../validator-date.service';
import { FormControl } from '@angular/forms';

describe('ValidatorDateService', () => {
  it('should validate valid date', () => {
    const control = new FormControl('15.02.2025');
    const result = dateValidator(control);
    expect(result).toBeNull(); 
  });

  it('should reject invalid date (day > 31)', () => {
    const control = new FormControl('35.02.2025');
    const result = dateValidator(control);
    expect(result).toEqual({ dateInvalid: true });
  });

  it('should reject date with year < 1900', () => {
    const control = new FormControl('15.02.1800');
    const result = dateValidator(control);
    expect(result).toEqual({ dateInvalid: true });
  });
});
