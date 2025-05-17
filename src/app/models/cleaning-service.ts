import { ICleaningService } from './icleaning-service';

export abstract class CleaningService implements ICleaningService {
  private id: number = 0;
  private name: string = '';
  private price: number = 1;

  constructor(id: number, name: string, price: number) {
    if (id < 0) throw new Error('id < 0');
    if (price < 1) throw new Error('price < 1');
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getID(): number {
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
