import { CleaningService } from './cleaning-service';

export class OfficeCleaning extends CleaningService {
  private squareMeters: number = 10;

  constructor(
    id: string,
    name: string,
    price: number,
    squareMeters: number
  ) {
    super(id, name, price);
    if (squareMeters < 10)
      throw new Error('Площа офісу має бути не менше 10 м²');
    this.squareMeters = squareMeters;
  }

  override getDetails(): string[] {
    let details: string[] = [];
    details.push('Тип послуги: Прибирання офісу');
    details.push('Площа: ' + this.squareMeters + ' м²');
    return details;
  }

  override getType(): string {
    return 'OfficeCleaning';
  }

  getSquareMeters(): number {
    return this.squareMeters;
  }
}
