
import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ServiceListComponent } from '../components/service-list/service-list.component';
import { AddServiceComponent } from '../components/add-service/add-service.component';
import { EditServiceComponent } from '../components/edit-service/edit-service.component';

import { ICleaningService } from '../models/icleaning-service';
import { CleaningServiceReadService } from '../services/cleaning-service-read.service';

import { FilterPageComponent } from '../pages/filter-page/filter-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonItem,
    IonLabel,
    CommonModule,
    HeaderComponent,
    ServiceListComponent,
    AddServiceComponent,
    EditServiceComponent,
    FilterPageComponent 
  ],
})
export class HomePage implements OnInit {
  services: ICleaningService[] = [];
  showAddForm = false;

  showEditForm = false;
  editFormNumber = 0;

  constructor(private cleaningServiceReadService: CleaningServiceReadService) {}

  async ngOnInit(): Promise<void> {
    await this.cleaningServiceReadService.load();
    this.services = [...this.cleaningServiceReadService.services];
  }

  addFormShow(): void {
    this.showAddForm = true;
  }

  onServiceAdd(service: ICleaningService): void {
    this.services.push(service);
    console.log('Додано послугу:', service);
    this.showAddForm = false;
  }

  editFormShow(i: number): void {
    this.showEditForm = true;
    this.editFormNumber = i;
  }

  editService($event: ICleaningService, i: number): void {
    this.services[i] = $event;
    console.log('Оновлено послугу:', $event);
    this.showEditForm = false;
  }

  deleteService(index: number): void {
  const removedService = this.services[index];
  const name = removedService.getName();
  
  console.log(`Видалено послугу з індексом ${index}: ${name}`);
  
  this.services.splice(index, 1);
  }
}
