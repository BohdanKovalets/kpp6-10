import { ICleaningService } from '../models/icleaning-service';
import { ApartmentCleaning } from '../models/apartment-cleaning';
import { OfficeCleaning } from '../models/office-cleaning';
import { WindowWashing } from '../models/window-washing';
import { DeepCleaning } from '../models/deep-cleaning';

export class CleaningServiceFactory {
  static createService(data: any): ICleaningService {
    switch (data.type) {
      case 'ApartmentCleaning':
        return new ApartmentCleaning(
          String(data.id),
          data.name,
          data.price,
          data.rooms
        );

      case 'OfficeCleaning':
        return new OfficeCleaning(
          String(data.id),
          data.name,
          data.price,
          data.squareMeters
        );

      case 'WindowWashing':
        return new WindowWashing(
          String(data.id),
          data.name,
          data.price,
          data.floors,
          new Date(data.date)
        );
      
      case 'DeepCleaning':
        return new DeepCleaning(
          String(data.id),
          data.name,
          data.price,
          data.area
        );

      default:
        throw new Error('Unknown cleaning service type: ' + data.type);
    }
  }
}
