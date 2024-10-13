import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CarTableComponent } from '../../components/car-table/car-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly router = inject(Router)

  searchText: string = '';  // Variable pour stocker le texte de recherche

  // Méthode pour capturer la recherche
  onSearchCar(event: any) {
    this.searchText = event.target.value;
  }

  onClickAddCar() {
    this.router.navigate(['/voitures/ajout'])
  }
}
