import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupersecretComponent } from './supersecret/supersecret.component';

const routes: Routes = [
  { path: 'secret', component: SupersecretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
