import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  @Input({required: true})
  car: Car = { id: 0, brand: '', model: '' };
}
