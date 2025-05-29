import { CleaningService } from './cleaning-service';

export class WindowWashing extends CleaningService {
  private floors: number = 1;
  private date: Date;

  constructor(
    id: string,
    name: string,
    price: number,
    floors: number,
    date: Date
  ) {
    super(id, name, price);

    if (floors < 1 || floors > 50)
      throw new Error('Кількість поверхів має бути в межах 1–50');
    this.floors = floors;

    const now = new Date();
    if (date.getTime() < now.getTime())
      throw new Error('Дата миття вікон не може бути в минулому');
    this.date = date;
  }

  override getDetails(): string[] {
    let details: string[] = [];
    details.push('Тип послуги: Миття вікон');
    details.push('Кількість поверхів: ' + this.floors);
    details.push(
      'Запланована дата: ' +
        this.date.toLocaleDateString('uk-UA', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
    );
    return details;
  }

  override getType(): string {
    return 'WindowWashing';
  }

  getFloors(): number {
    return this.floors;
  }

  getDate(): Date {
    return this.date;
  }
}
