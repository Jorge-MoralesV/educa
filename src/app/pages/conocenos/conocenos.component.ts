import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

  investigadores = [{
    nombre: 'Dra. Guadalupe Espinosa Herrera',
    ocupacion: 'Lider de Proyectos',
    imagen: 'assets/conocenos/investigador1.webp'
  }, {
    nombre: 'Mtra. Olivia Zúñiga Espinosa',
    ocupacion: 'Conferencista',
    imagen: 'assets/conocenos/investigador2.webp'
  }, {
    nombre: 'Dra. Claudia López Pérez',
    ocupacion: 'Conferencista',
    imagen: 'assets/conocenos/investigador3.webp'
  }, {
    nombre: 'Mtro. Enrique Hernández',
    ocupacion: 'Conferencista',
    imagen: 'assets/conocenos/investigador4.webp'
  }];

  constructor() { }

  ngOnInit() {
  }

}
