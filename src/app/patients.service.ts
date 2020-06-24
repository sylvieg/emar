import { Injectable, EventEmitter } from '@angular/core';

import { Patient } from './patient.model';
import { MedOrder } from './medOrder.model';
import { Med } from './med.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Patient[] = [
    new Patient(0, 'Steven', 'Rogers', 'M', '56 yrs', 'ER07', 'red',[
      new MedOrder(new Med(1,'Ibuprofen 600mg tablet',''))
    ]),
    new Patient(1, 'Tony', 'Stark', 'M', '28 yrs', 'A01', 'blue',[])
  ];
  patientMedOrdersChanged = new EventEmitter<MedOrder[]>();

  constructor() { }

  getPatients() {
    return this.patients.slice();
  }

  getPatient(id: number) {
    const patient = this.patients.find( (p) => {
        return p.id === id;
      }
    );
    return patient;
  }

  addMedOrder(idPatient: number, medOrder: MedOrder) {
    this.patients[idPatient].medOrders.push(medOrder);
    this.patientMedOrdersChanged.emit(this.patients[idPatient].medOrders);
  }

  getPatientMedOrders(idPatient: number) {
    const patient = this.getPatient(idPatient);
    return patient.medOrders.slice();
  }
}
