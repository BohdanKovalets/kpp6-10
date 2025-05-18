import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ICleaningService } from '../../models/icleaning-service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent {
  @Input() services: ICleaningService[] = [];

  order(serviceName: string): void {
    console.log(`Замовлено: ${serviceName}`);
  }
}
