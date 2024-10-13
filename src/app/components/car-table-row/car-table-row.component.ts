import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: '[app-car-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './car-table-row.component.html',
  styleUrl: './car-table-row.component.scss'
})
export class CarTableRowComponent {

  @Input({required: true})
  car: Car = { id: 0, brand: '', model: '' };

  @Output()
  showDetailsClicked: EventEmitter<any> = new EventEmitter<Car>()

  @Output()
  deleteCarClicked: EventEmitter<any> = new EventEmitter<Car>()

  onClickShowDetails(car: Car){
    this.showDetailsClicked.emit(car)
  }

  onClickDeleteCar(car: Car) {
  this.deleteCarClicked.emit(car)
  }
  
}
