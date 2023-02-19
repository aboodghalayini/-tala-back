import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LocationComponent } from './Component/location/location.component';
import { FormComponent } from './Component/form/form.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    FormComponent,
    DashboardComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
