import { ApartmentCleaning } from '../apartment-cleaning';

describe('ApartmentCleaning', () => {
  it('should create a valid instance', () => {
    const service = new ApartmentCleaning(1, 'Basic Apartment Cleaning', 500, 3);
    expect(service.getID()).toBe(1);
    expect(service.getName()).toBe('Basic Apartment Cleaning');
    expect(service.getPrice()).toBe(500);
    expect(service.getRooms()).toBe(3);
    expect(service.getType()).toBe('ApartmentCleaning');
    expect(service.getDetails()).toContain('Кількість кімнат: 3');
  });

  it('should throw error for invalid room count', () => {
    expect(() => {
      new ApartmentCleaning(2, 'Invalid Cleaning', 400, 0);
    }).toThrowError('Кількість кімнат має бути ≥ 1');
  });

  it('should throw error for negative ID or price', () => {
    expect(() => new ApartmentCleaning(-1, 'Test', 100, 2)).toThrowError('id < 0');
    expect(() => new ApartmentCleaning(1, 'Test', 0, 2)).toThrowError('price < 1');
  });
});
