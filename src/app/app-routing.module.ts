import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientNewMedOrderComponent } from './patient-new-med-order/patient-new-med-order.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PatientMedOrderEditComponent } from './patient-med-order-edit/patient-med-order-edit.component';

const routes: Routes = [
  { path: '', redirectTo: './patients/1/cart', pathMatch: 'full' },
  { path: 'patients/:id/cart', component: PatientNewMedOrderComponent },
  { path: 'patients/:id/orders/:idOrder', component: PatientMedOrderEditComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
