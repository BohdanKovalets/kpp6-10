import { CleaningService } from './cleaning-service';

export class ApartmentCleaning extends CleaningService {
  private rooms: number = 1;

  constructor(
    id: string,
    name: string,
    price: number,
    rooms: number
  ) {
    super(id, name, price);
    if (rooms < 1) throw new Error('Кількість кімнат має бути ≥ 1');
    this.rooms = rooms;
  }

  override getDetails(): string[] {
    let details: string[] = [];
    details.push('Тип послуги: Прибирання квартири');
    details.push('Кількість кімнат: ' + this.rooms);
    return details;
  }

  override getType(): string {
    return 'ApartmentCleaning';
  }

  getRooms(): number {
    return this.rooms;
  }
}
