import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
// servicio
import { PersonaService} from './service/persona.service';
//  firebase
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

//

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule,
    // Vex
    VexModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
