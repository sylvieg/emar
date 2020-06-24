import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {
  patient: Patient;

  constructor(private patientsService: PatientsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.patient = this.patientsService.getPatient(id);

  }

}
