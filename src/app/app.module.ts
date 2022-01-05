import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionCandidatoComponent } from './components/informacion-candidato/informacion-candidato.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioCandidatoDiligenciadoComponent } from './components/formulario-candidato-diligenciado/formulario-candidato-diligenciado.component';
import { EtapasComponent } from './components/etapas/etapas.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionCandidatoComponent,
    NavbarComponent,
    FormularioCandidatoDiligenciadoComponent,
    EtapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
