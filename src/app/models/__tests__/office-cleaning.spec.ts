import { OfficeCleaning } from '../office-cleaning';

describe('OfficeCleaning', () => {
  it('should create valid office cleaning instance', () => {
    const service = new OfficeCleaning(10, 'Office Clean', 1000, 150);
    expect(service.getID()).toBe(10);
    expect(service.getSquareMeters()).toBe(150);
    expect(service.getType()).toBe('OfficeCleaning');
    expect(service.getDetails()).toContain('Площа: 150 м²');
  });

  it('should throw error for small area', () => {
    expect(() => new OfficeCleaning(11, 'Tiny Office', 500, 5))
      .toThrowError('Площа офісу має бути не менше 10 м²');
  });
});
