import { StringToDate } from '../string-to-date';

describe('StringToDate', () => {
  it('should convert string to Date', () => {
    const s = '15.02.2025';
    const expected = new Date(2025, 1, 15); 
    const result = StringToDate(s);
    expect(result).toEqual(expected);
  });
});
