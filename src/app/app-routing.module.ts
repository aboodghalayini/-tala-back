import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpordComponent } from './pages/dashpord/dashpord.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent },
  { path: "dashpord", component: DashpordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
