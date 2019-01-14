import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupersecretComponent } from './supersecret/supersecret.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'secret', component: SupersecretComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
