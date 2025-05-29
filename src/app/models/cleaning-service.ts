import { ICleaningService } from './icleaning-service';

export abstract class CleaningService implements ICleaningService {
   public id: string = '';
   public name: string = '';
   public price: number = 1;

  constructor(id: string, name: string, price: number) {
    if (!id) throw new Error('id < 0');
    if (price < 1) throw new Error('price < 1');
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDetails(): string[] {
    return [];
  }

  getType(): string {
    return 'CleaningService';
  }
}
