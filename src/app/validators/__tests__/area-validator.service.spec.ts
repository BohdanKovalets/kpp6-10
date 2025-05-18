import { areaValidator } from '../area-validator.service';
import { FormControl } from '@angular/forms';

describe('areaValidator', () => {
  it('should accept valid area', () => {
    const control = new FormControl(80);
    const result = areaValidator(control);
    expect(result).toBeNull(); 
  });

  it('should reject area < 20', () => {
    const control = new FormControl(10);
    const result = areaValidator(control);
    expect(result).toEqual({ areaInvalid: true });
  });

  it('should reject area > 500', () => {
    const control = new FormControl(1000);
    const result = areaValidator(control);
    expect(result).toEqual({ areaInvalid: true });
  });

  it('should reject non-numeric value', () => {
    const control = new FormControl('abc');
    const result = areaValidator(control);
    expect(result).toEqual({ areaInvalid: true });
  });
});
