import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { ApoiadoresComponent } from './components/apoiadores/apoiadores.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    ApoiadoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
