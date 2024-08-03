import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { UneteYParticipaComponent } from './pages/unete-y-participa/unete-y-participa.component';
import { TemasComponent } from './pages/temas/temas.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { SobreEducaComponent } from './pages/sobre-educa/sobre-educa.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'calendario', component: CalendarioComponent
  }, {
    path: 'unete-participa', component: UneteYParticipaComponent
  }, {
    path: 'temas', component: TemasComponent
  }, {
    path: 'publicaciones', component: PublicacionesComponent
  }, {
    path: 'sobre-educa', component: SobreEducaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
