import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { UneteYParticipaComponent } from './pages/unete-y-participa/unete-y-participa.component';
import { TemasComponent } from './pages/temas/temas.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { SobreEducaComponent } from './pages/sobre-educa/sobre-educa.component';
import { RouterModule } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarioComponent,
    UneteYParticipaComponent,
    TemasComponent,
    PublicacionesComponent,
    SobreEducaComponent,
    ExperienciaComponent,
    NavbarComponent,
    FooterComponent,
    ConocenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
