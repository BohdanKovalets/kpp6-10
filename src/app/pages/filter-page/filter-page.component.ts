import { HeaderComponent } from '../../components/header/header.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { CleaningServiceType, cleaningServiceType } from '../../models/types';
import { CleaningServiceReadService } from '../../services/cleaning-service-read.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],
  standalone: true,
  imports: [CommonModule,
    IonicModule,
    HeaderComponent,], 
})
export class FilterPageComponent implements OnInit, OnDestroy {
  type: CleaningServiceType = cleaningServiceType[0];
  count = 0;
  subscriptions: Subscription[] = [];

  constructor(
    private configService: ConfigService,
    public productService: CleaningServiceReadService
  ) {}

  ngOnInit(): void {
    const typeSub = this.configService.type$.subscribe(() => {
      this.type = this.configService.type$.value;
    });
    this.subscriptions.push(typeSub);
  }

  nextType(): void {
    if (this.count < cleaningServiceType.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.configService.setType(cleaningServiceType[this.count]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onPriceChange(value: string): void {
  const price = parseFloat(value || '0');
  if (!isNaN(price)) {
    this.productService.search(this.type, price);
  }
 }
}
