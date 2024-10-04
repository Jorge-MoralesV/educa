import { Component } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
  isMenuOpen1 = false;
  isMenuOpen2 = false;
  isMenuOpen3 = false;
  isMenuOpen4 = false;
  toggleMenu1() {
    this.isMenuOpen1 = !this.isMenuOpen1;
  }
  toggleMenu2() {
    this.isMenuOpen2 = !this.isMenuOpen2;
  }
  toggleMenu3() {
    this.isMenuOpen3 = !this.isMenuOpen3;
  }
  toggleMenu4() {
    this.isMenuOpen4 = !this.isMenuOpen4;
  }

}
