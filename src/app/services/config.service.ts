import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CleaningServiceType } from '../models/types';

const DEFAULT_TYPE = CleaningServiceType.ApartmentCleaning;

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  currentType = DEFAULT_TYPE;

  type$: BehaviorSubject<CleaningServiceType> = new BehaviorSubject<CleaningServiceType>(
    DEFAULT_TYPE
  );

  setType(type: CleaningServiceType): void {
    console.log('Тип змінено:', type);
    this.type$.next(type); 
  }

  constructor() {}
}
