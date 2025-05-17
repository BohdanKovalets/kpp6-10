import { Component, OnInit } from '@angular/core';
import { CleaningServiceReadService } from '../../services/cleaning-service-read.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
  constructor(public cleaningServiceReadService: CleaningServiceReadService) {}

  ngOnInit(): void {
    this.cleaningServiceReadService.load();
  }

  order(serviceName: string): void {
    console.log(`Замовлено: ${serviceName}`);
  }
}
