import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  expositores = [{
    fecha: '23 de Noviembre, 2023',
    oracion: '"El rol de las bibliotecas en la promoción de una educación abierta e inclusiva: el acceso a la información"',
    descripcion: 'Teniendo en cuenta la definicion de REA, reconocemos su valor; sin embargo, es posible que el profesorado o los alumnos no los encuentren fácilmente para mejorar su educación. Los bibliotecarios pueden apoyar al profesorado y a los alumnos proporcionando formación en alfabetización digital e informacional asesorando en materia.',
    nombre: 'Mtra. Daniela Ordoñez Pérez',
    imagen: 'assets/img/image.png'
  }, {
    fecha: '24 de Noviembre, 2023',
    oracion: '"Creación de libros electronicos, Consideraciones actuales para estudiantes sordos y con dificultades auditivas (DHH)"',
    descripcion: 'Explora los principios de diseño universal y los marcos de accesibilidad desarrollados por organizaciones, asi como los sistemas actuales para la provisión de libros electronicos a los estudiantes sordos y con dificultades auditivas.',
    nombre: 'Mtra. Olivia Zúñiga Espinosa',
    imagen: 'assets/img/img1.png'
  }, {
    fecha: '3 de Diciembre, 2023',
    oracion: '"Conectando las prácticas educativas abiertas y la ciencia abierta"',
    descripcion: 'La Educación Abierta se basa en el desarrollo, uso y reutilización de los Reccursos Educativos Abiertos (REA). Más allá de las esa operativa básica con los REA, las prácticas educativas abiertas han permitido pasar del recurso a la instrucción. Estas prácticas se asocian de una forma natural con la formación no presencial, pero, especialmente tras la pandemia por la COVID-19, también se han trasladado a ambientes presenciales e híbridos.',
    nombre: 'Dra. Claudia López Pérez',
    imagen: 'assets/img/img2.png'
  }, {
    fecha: '11 de Diciembre, 2023',
    oracion: '"El crecimiento de las redes de estudiantes de REA"',
    descripcion: 'Este seminario web ofrece un ejemplo de cómo se ha desarrollado una red de REA entre el profesorado de educación superior y los estudiantes universitarios en la provincia de Alberta, Canadá. Muestra cómo defensores de los REA distribuidos físicamente y con diferentes perspecivas se han unido para construir una red de apoyo a los estudiantes más fuertes y la adopción de los REA.',
    nombre: 'Mtro. Enrique Hernández',
    imagen: 'assets/img/img3.png'
  }];
}
