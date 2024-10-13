import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarAddComponent } from './pages/car-add/car-add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'voitures', pathMatch:'full' },
    { path: 'voitures', children: [
        { path: '', component: HomeComponent },
        { path: 'ajout', component: CarAddComponent },
    ]}
];
