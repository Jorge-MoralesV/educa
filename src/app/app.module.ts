import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { UneteYParticipaComponent } from './pages/unete-y-participa/unete-y-participa.component';
import { TemasComponent } from './pages/temas/temas.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { SobreEducaComponent } from './pages/sobre-educa/sobre-educa.component';
import { RouterModule } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CalendarioComponent,
    UneteYParticipaComponent,
    TemasComponent,
    PublicacionesComponent,
    SobreEducaComponent,
    ExperienciaComponent
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
