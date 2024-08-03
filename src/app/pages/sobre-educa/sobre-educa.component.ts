import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-educa',
  templateUrl: './sobre-educa.component.html',
  styleUrl: './sobre-educa.component.css'
})
export class SobreEducaComponent {

  cards = [
    { titulo: 'Misión', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi inventore, similique pariatura liquid eos voluptate ducimus sunt, impedit, repellat voluptatem aliquam maiores! Eum facere maxime eaqueesse vitae animi.' },
    { titulo: 'Visión', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi inventore, similique pariatura liquid eos voluptate ducimus sunt, impedit, repellat voluptatem aliquam maiores! Eum facere maxime eaqueesse vitae animi.' },
    { titulo: 'Descripción', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi inventore, similique pariatura liquid eos voluptate ducimus sunt, impedit, repellat voluptatem aliquam maiores! Eum facere maxime eaqueesse vitae animi.' },
    { titulo: 'Impacto', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi inventore, similique pariatura liquid eos voluptate ducimus sunt, impedit, repellat voluptatem aliquam maiores! Eum facere maxime eaqueesse vitae animi.' }
  ];

}
