import { WindowWashing } from '../window-washing';

describe('WindowWashing', () => {
  it('should create valid instance', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);

    const service = new WindowWashing(3, 'GlassPro', 800, 5, futureDate);
    expect(service.getFloors()).toBe(5);
    expect(service.getDate()).toEqual(futureDate);
    expect(service.getDetails()[2]).toContain('Запланована дата');
  });

  it('should throw error for floor out of range', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    expect(() => new WindowWashing(4, 'Too Tall', 700, 0, date))
      .toThrowError('Кількість поверхів має бути в межах 1–50');
    expect(() => new WindowWashing(5, 'Too Tall', 700, 100, date))
      .toThrowError('Кількість поверхів має бути в межах 1–50');
  });

  it('should throw error for past date', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);

    expect(() => new WindowWashing(6, 'Old Date', 700, 3, pastDate))
      .toThrowError('Дата миття вікон не може бути в минулому');
  });
});
