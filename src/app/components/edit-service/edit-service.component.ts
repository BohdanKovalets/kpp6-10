import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CleaningServiceType } from '../../models/types';
import { ICleaningService } from '../../models/icleaning-service';
import { formConstructor } from '../../forms/form-constructor';
import { CleaningServiceFactory } from '../../services/cleaning-service-factory';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {
  @Input() service!: ICleaningService;
  @Output() serviceEdit: EventEmitter<ICleaningService> = new EventEmitter();

  serviceForm!: FormGroup;
  types = Object.values(CleaningServiceType);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: [this.service.getName(), [Validators.required, Validators.minLength(3)]],
      price: [this.service.getPrice(), [Validators.required, Validators.min(0)]],
    });

    formConstructor(this.service.getType(), this.serviceForm, this.fb);
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      formData.type = this.service.getType();
      formData.id = this.service['id'];
      this.serviceEdit.emit(formData);
    } else {
      console.error('Form is invalid');
    }
  }
}
