import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarFretboardComponent } from './guitar-fretboard/guitar-fretboard.component';
import { LoadingNotesService } from './services/loading-notes.service'



@NgModule({
  declarations: [
    AppComponent,
    GuitarFretboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoadingNotesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
