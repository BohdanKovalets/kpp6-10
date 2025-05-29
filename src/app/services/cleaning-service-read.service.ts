import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { Database, ref, onValue, push, set, remove, update } from '@angular/fire/database';
import { ICleaningService } from '../models/icleaning-service';
import { CleaningServiceFactory } from './cleaning-service-factory';
import { CleaningServiceType } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class CleaningServiceReadService {
  private servicesSubject = new BehaviorSubject<ICleaningService[]>([]);
  public services$ = this.servicesSubject.asObservable();
  public services: ICleaningService[] = [];
  public filteredServices: ICleaningService[] = [];
  private minPrice = 0;

  constructor(private db: Database) {}

  fetchServices(): void {
  //console.log('fetchServices called!');
  const servicesRef = ref(this.db, 'services');
  //console.log('servicesRef:', servicesRef);
  onValue(servicesRef, (snapshot) => {
    //console.log('onValue called!');
    const data = snapshot.val();
    //console.log('RAW DATA FROM FIREBASE:', data);
    let services: ICleaningService[] = [];
    if (data) {
      Object.entries(data).forEach(([key, value]: [string, any]) => {
        const serviceObj = { ...value, id: key };
        //console.log('CREATING SERVICE:', serviceObj);
        services.push(CleaningServiceFactory.createService(serviceObj));
      });
    }
    this.services = services;
    this.servicesSubject.next(services);
    this.filteredServices = services;
    //console.log('SERVICES IN BEHAVIOR SUBJECT:', services);
  });
  }

  addService(service: any): void { 
  const servicesRef = ref(this.db, 'services');
  const newServiceRef = push(servicesRef);
  set(newServiceRef, {
    ...service,
    id: newServiceRef.key,
    type: service.type,
  });
  }

  updateService(service: any): void {
  const serviceRef = ref(this.db, `services/${service.id}`); 
  update(serviceRef, {
    ...service,
    type: service.type,
  });
}

  deleteService(id: string): void {
  const serviceRef = ref(this.db, `services/${id}`);
  remove(serviceRef);
}

  search(type: CleaningServiceType, minPrice: number = 0): void {
    this.filteredServices = this.services.filter(
      (service) => service.getType() === type && service.getPrice() >= minPrice
    );
  }
}
