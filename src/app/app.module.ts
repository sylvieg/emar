import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { PatientNewMedOrderComponent } from './patient-new-med-order/patient-new-med-order.component';
import { PatientMedOrdersComponent } from './patient-med-orders/patient-med-orders.component';
import { UserMedsComponent } from './user-meds/user-meds.component';
import { UserQuickMedsComponent } from './user-quick-meds/user-quick-meds.component';
import { DptMedsComponent } from './dpt-meds/dpt-meds.component';
import { GrpMedsComponent } from './grp-meds/grp-meds.component';
import { NgbdTypeaheadMed } from './typeahead-med';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PatientsService } from './patients.service';
import { MedsService } from './meds.service';
import { RoomComponent } from './room/room.component';
import { MedOrderSummaryComponent } from './med-order-summary/med-order-summary.component';
import { PatientMedOrderEditComponent } from './patient-med-order-edit/patient-med-order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientHeaderComponent,
    PatientNewMedOrderComponent,
    PatientMedOrdersComponent,
    UserMedsComponent,
    UserQuickMedsComponent,
    DptMedsComponent,
    GrpMedsComponent,
    NgbdTypeaheadMed,
    ErrorPageComponent,
    RoomComponent,
    MedOrderSummaryComponent,
    PatientMedOrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [PatientsService, MedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
