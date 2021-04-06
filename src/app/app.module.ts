import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { ApoiadoresComponent } from './components/apoiadores/apoiadores.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    ApoiadoresComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
