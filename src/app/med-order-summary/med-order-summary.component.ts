import { Component, OnInit } from '@angular/core';
import { MedOrder } from '../medOrder.model';

@Component({
  selector: 'app-med-order-summary',
  templateUrl: './med-order-summary.component.html',
  styleUrls: ['./med-order-summary.component.css']
})
export class MedOrderSummaryComponent implements OnInit {
  id: number;
  med: MedOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
