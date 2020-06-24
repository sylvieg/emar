import { Component, OnInit, EventEmitter } from '@angular/core';
import { PatientsService } from '../patients.service';
import { ActivatedRoute } from '@angular/router';
import { MedOrder } from '../medOrder.model';

@Component({
  selector: 'app-patient-med-orders',
  templateUrl: './patient-med-orders.component.html',
  styleUrls: ['./patient-med-orders.component.css']
})
export class PatientMedOrdersComponent implements OnInit {
  medOrders: MedOrder[];
  medOrdersChanged = new EventEmitter<MedOrder[]>();

  constructor(private patientsService: PatientsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id:number = +this.route.snapshot.params['id'];
    this.medOrders = this.patientsService.getPatientMedOrders(id);
    this.patientsService.patientMedOrdersChanged.subscribe(
      (medOrders: MedOrder[]) => {
        console.log('medOrders reassigned'); console.log(medOrders);
        this.medOrders = medOrders;
      }
    );
  }

}
