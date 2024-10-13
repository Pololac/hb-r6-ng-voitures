import { Component, inject, Input, OnInit} from '@angular/core';
import { CarTableRowComponent } from '../car-table-row/car-table-row.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car.model';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [CarTableRowComponent, CarCardComponent, NgFor, NgIf, NgClass],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.scss'
})
export class CarTableComponent implements OnInit {
  private readonly carService = inject(CarService)

  @Input({required: true})
  searchText: string = ''

  cars: Car[] = [];
  // Propriété pour stocker la voiture sélectionnée
  selectedCar: Car | null = null
  // Propriété pour stocker les voitures filtrées
  filteredCars: Car[] = []
  
  ngOnInit() {
    this.cars = this.carService.getCars()
    this.filteredCars = this.cars
  }

  // Méthode pour détecter des changements dans l'input et afficher les voitures recherchées
  ngOnChanges() {
    this.applyFilter()
  }
 
  applyFilter() {
    if (this.searchText && this.searchText.length >= 3) {
      this.filteredCars = this.cars.filter(car => 
        car.brand.toLowerCase().startsWith(this.searchText.toLowerCase())
        || car.model.toLowerCase().startsWith(this.searchText.toLowerCase())
      )
    } else {
      this.filteredCars = this.cars;  // Réinitialiser si le texte est vide ou trop court
    }
  }

  // Méthode pour afficher l'image de la voiture sélectionnée dans une card
  onShowDetailsClicked(car: Car) {
    this.selectedCar = car
    this.selectedCar.imageUrl = this.getRandomImageUrl()
  }

  // Méthode pour générer une URL d'image aléatoire depuis Picsum
  getRandomImageUrl(): string {
    const randomId = Math.floor(Math.random() * 500);  // Génère un ID aléatoire entre 0 et 499
    return `https://picsum.photos/id/${randomId}/400/300`;
  }

  // Méthode pour supprimer la voiture sélectionnée
  onDeleteCarClicked(car: Car) {
    this.carService.deleteCar(car.id)
    this.cars = this.carService.getCars(); 
  }

}
