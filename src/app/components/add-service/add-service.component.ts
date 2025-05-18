import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  Component, OnInit, Output, EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formConstructor } from '../../forms/form-constructor';
import { CleaningServiceType } from './../../models/types';
import { ICleaningService } from './../../models/icleaning-service';
import { CleaningServiceFactory } from '../../services/cleaning-service-factory';

@Component({
  selector: 'app-add-service',
  standalone: true,
    imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent implements OnInit {
  serviceForm!: FormGroup;
  currentType: CleaningServiceType = CleaningServiceType.ApartmentCleaning;
  types = Object.values(CleaningServiceType);

  @Output() serviceAdd: EventEmitter<ICleaningService> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
    this.onTypeChange(this.currentType);
  }

  onTypeChange(type: string): void {
    this.currentType = type as CleaningServiceType;
    formConstructor(this.currentType, this.serviceForm, this.fb);
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      formData.type = this.currentType;
      const service = CleaningServiceFactory.createService(formData);
      this.serviceAdd.emit(service);
    } else {
      console.error('Форма невалідна');
    }
  }
}
