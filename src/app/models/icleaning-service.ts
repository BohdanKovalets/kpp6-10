export interface ICleaningService {
  getID(): number;
  getName(): string;
  getPrice(): number;
  getDetails(): string[];
  getType(): string;
}
