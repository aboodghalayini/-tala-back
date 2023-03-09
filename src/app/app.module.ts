import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from 'src/environment/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { LandingComponent } from './pages/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashpordComponent } from './pages/dashpord/dashpord.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashpordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
