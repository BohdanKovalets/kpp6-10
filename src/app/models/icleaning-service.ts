export interface ICleaningService {
  id: string;
  getID(): string;
  getName(): string;
  getPrice(): number;
  getDetails(): string[];
  getType(): string;
}
