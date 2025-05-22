import { Injectable } from '@angular/core';
import { ICleaningService } from '../models/icleaning-service';
import { CleaningServiceFactory } from './cleaning-service-factory';
import { CleaningServiceType } from '../models/types';
import { ConfigService } from './config.service';

const API_URL = 'https://api.jsonbin.io/v3/b/6828460e8a456b79669f7c8f';
const API_KEY_MASTER = '$2a$10$f.1aE4av5G1NuuGhfd4Gy.LU6.H3ckZYbewDVAMCdl2q13NuHqexa';
const API_KEY_ACCESS = '$2a$10$IjAHmTEmhJNW/CTG6dO9TeY9XUg8GfaNzU9QBc18uKCL5Krt5y2j6';

@Injectable({
  providedIn: 'root',
})
export class CleaningServiceReadService {
  public services: ICleaningService[] = [];
  public filteredServices: ICleaningService[] = [];
  private minPrice = 0;

  constructor(private configService: ConfigService) {
    this.configService.type$.subscribe((type) => {
      this.search(type, this.minPrice);
    });
  }

  addService(service: ICleaningService): void {
    this.services.push(service);
  }

  public async load(): Promise<void> {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Master-Key': API_KEY_MASTER,
          'X-Access-Key': API_KEY_ACCESS,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      const data = json.record;

      const services: ICleaningService[] = data.map((item: any) =>
        CleaningServiceFactory.createService(item)
      );

      this.services = [];
      services.forEach((service: ICleaningService) =>
        this.addService(service)
      );

      this.search(this.configService.type$.value, this.minPrice);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
   search(type: CleaningServiceType, minPrice: number = 0): void {
    this.filteredServices = this.services.filter(
    (service) => service.getType() === type && service.getPrice() >= minPrice
  );
}
}
