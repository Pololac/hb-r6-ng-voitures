import { Injectable } from '@angular/core';
import { Car } from '../../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    { id: 1, brand: 'Peugeot', model: '306' },
    { id: 2, brand: 'Renault', model: 'Clio' },
    { id: 3, brand: 'Citroen', model: 'Xantia' },
    { id: 4, brand: 'Skoda', model: 'Fabia' },
    { id: 5, brand: 'BMW', model: 'Serie 3' },
    { id: 6, brand: 'Mercedes', model: 'Classe A' },
    { id: 7, brand: 'Audi', model: 'A4' },
    { id: 8, brand: 'Volkswagen', model: 'Golf' },
    { id: 9, brand: 'Fiat', model: '500' },
    { id: 10, brand: 'Nissan', model: 'Juke' },
  ];

  getCars(): Car[] {
    return this.cars;
  }

  deleteCar(id: number): void {
    this.cars.splice(id - 1, 1)
  }

  addCar(car: Car): void {
    this.cars.push(car)
  }

}
