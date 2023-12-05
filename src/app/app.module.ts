import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarFretboardComponent } from './guitar-fretboard/guitar-fretboard.component';
import { LoadingNotesService } from './services/loading-notes.service';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SelectInstrumentComponent } from './select-instrument/select-instrument.component';
import { BassFretboardComponent } from './bass-fretboard/bass-fretboard.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitarFretboardComponent,
    SelectInstrumentComponent,
    BassFretboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [
    LoadingNotesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
