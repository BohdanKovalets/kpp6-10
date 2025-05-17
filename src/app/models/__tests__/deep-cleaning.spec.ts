import { DeepCleaning } from '../deep-cleaning';

describe('DeepCleaning', () => {
  it('should create a valid instance', () => {
    const service = new DeepCleaning(7, 'Генеральне прибирання', 1800, 80);
    expect(service.getID()).toBe(7);
    expect(service.getName()).toBe('Генеральне прибирання');
    expect(service.getPrice()).toBe(1800);
    expect(service.getArea()).toBe(80);
    expect(service.getType()).toBe('DeepCleaning');
    expect(service.getDetails()).toContain('Прибирається площа: 80 м²');
  });

  it('should throw error for too small area', () => {
    expect(() => new DeepCleaning(8, 'Мала площа', 1000, 10))
      .toThrowError('Площа прибирання має бути не менше 20 м²');
  });
});
