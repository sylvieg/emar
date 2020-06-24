import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from './patients.service';
import { MedOrder } from './medOrder.model';
import { Med } from './med.model';
// replace map with switchMap, catchError

const meds = [
  'amoxicillin 500 mg capsule',
  'amoxicillin 125 mg/5 mL oral suspension',
  'Ondansetron Hydrochoride 4 mg orally disintegrating'
];

@Component({
  selector: 'ngbd-typeahead-med',
  templateUrl: './typeahead-med.html',
  styleUrls: []
})
export class NgbdTypeaheadMed {
  public model: any;

  constructor(private route:ActivatedRoute,
    private patientsService: PatientsService){}

  lookup = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2
        ? []
        : meds.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    // switchMap( (searchText) => this.albumService.artistLookup(searhText) ),
    // catchError(new ErrorInfo().parseObservableResponseError)
  
  selectedItem(event) {
    console.log(event);
    const idPatient: number = +this.route.snapshot.params['id'];
    // TEMPORARY - SHOULD GO TO EDIT Order screen
    const medName = event.item;
    // TODO: get the id and the strength
    const med: Med = new Med(1, medName, ''); 
    const medOrder: MedOrder = new MedOrder(med);
    this.patientsService.addMedOrder(idPatient, medOrder);
  }
}
