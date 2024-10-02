import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {
  recursos = [{
    nombre: 'Espinosa Herrera Guadalupe',
    year: '2023',
    titulo: 'OMP Journal',
    doi: 'https://doi.org/101010/d000000000'
  }, {
    nombre: 'Kiara Steves',
    year: '2023',
    titulo: 'Preprints Publicaciones',
    doi: 'https://doi.org/101010/d000000000'
  }, {
    nombre: 'Espinosa Herrera Guadalupe',
    year: '2023',
    titulo: 'OMP Journal',
    doi: 'https://doi.org/101010/d000000000'
  }, {
    nombre: 'Kiara Steves',
    year: '2023',
    titulo: 'Preprints Publicaciones',
    doi: 'https://doi.org/101010/d000000000'
  }, {
    nombre: 'Espinosa Herrera Guadalupe',
    year: '2023',
    titulo: 'OMP Journal',
    doi: 'https://doi.org/101010/d000000000'
  }, {
    nombre: 'Kiara Steves',
    year: '2023',
    titulo: 'Preprints Publicaciones',
    doi: 'https://doi.org/101010/d000000000'
  }];

  colores = ['rgb(148, 175, 186)', 'rgb(222, 222, 222)', 'rgb(243, 127, 141)', 'rgb(128, 203, 235)', 'rgb(235, 211, 134)', 'rgb(148, 175, 186)'];
  file = ['#dbaf1f', '#575757', '#3a6b80', '#e60202', '#53c9b1', '#dbaf1f'];
}
