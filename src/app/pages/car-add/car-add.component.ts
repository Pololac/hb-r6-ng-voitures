import { Component, inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../services/car/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.scss'
})
export class CarAddComponent implements OnInit {
  private readonly carService = inject(CarService) 
  private readonly routeur = inject(Router) 
  
  addForm!: FormGroup

  ngOnInit(): void {
    this.addForm = new FormGroup({
      brand: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      model: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  onSubmitForm() {
    if (this.addForm.valid) {
      const newId = this.getNewCarId()
      const newCar = { id: newId, ...this.addForm.value }
      
      this.carService.addCar(newCar)
      // redirection vers la home
      this.routeur.navigate(['/voitures'])
    }
  }

  getNewCarId(): number {
    const lastItem = this.cars[this.cars.length]
    return lastItem.id + 1
  }


}
