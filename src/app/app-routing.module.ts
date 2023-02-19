import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { FormComponent } from './Component/form/form.component';
import { HomeComponent } from './Component/home/home.component';
import { LocationComponent } from './Component/location/location.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'location', component: LocationComponent},
  { path: 'Register', component: FormComponent},
  { path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
