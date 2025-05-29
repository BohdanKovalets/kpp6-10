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
import { FilterPageComponent } from '../pages/filter-page/filter-page.component';

import { ICleaningService } from '../models/icleaning-service';
import { CleaningServiceReadService } from '../services/cleaning-service-read.service';

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

  constructor(public cleaningServiceReadService: CleaningServiceReadService) {}

  ngOnInit(): void {
  this.cleaningServiceReadService.services$.subscribe(services => {
    this.services = services;
    //console.log('SERVICES IN HOMEPAGE:', services);
  });
  this.cleaningServiceReadService.fetchServices();
}

  addFormShow(): void {
    this.showAddForm = true;
  }

  onServiceAdd(service: ICleaningService): void {
    this.cleaningServiceReadService.addService(service);
    this.showAddForm = false;
  }

  editFormShow(i: number): void {
    this.showEditForm = true;
    this.editFormNumber = i;
  }

  editService(service: any, i: number): void {
    this.cleaningServiceReadService.updateService(service); 
    this.showEditForm = false;
  }

  deleteService(index: number): void {
    const service = this.services[index];
    if (service) {
    this.cleaningServiceReadService.deleteService(service.getID());
   }
 }
}
