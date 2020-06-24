import { Injectable } from '@angular/core';
import { Med } from './med.model';

@Injectable({
  providedIn: 'root'
})
export class MedsService {
  meds: Med[] = [
    new Med(1, 'amoxicillin', '500 mg capsule'),
    new Med(2, 'amoxicillin', '125 mg/5 mL oral suspension'),
    new Med(3, 'Ondansetron Hydrochoride', '4 mg orally disintegrating')
  ]

  constructor() { }
}
