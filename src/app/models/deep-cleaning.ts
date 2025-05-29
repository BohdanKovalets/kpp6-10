import { CleaningService } from './cleaning-service';

export class DeepCleaning extends CleaningService {
  private area: number = 0;

  constructor(
    id: string,
    name: string,
    price: number,
    area: number
  ) {
    super(id, name, price);

    if (area < 20) throw new Error('Площа прибирання має бути не менше 20 м²');
    this.area = area;
  }

  override getDetails(): string[] {
    let details: string[] = [];
    details.push('Тип послуги: Генеральне прибирання');
    details.push('Прибирається площа: ' + this.area + ' м²');
    return details;
  }

  override getType(): string {
    return 'DeepCleaning';
  }

  getArea(): number {
    return this.area;
  }
}
