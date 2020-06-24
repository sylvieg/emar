import { Med } from './med.model';

export class MedOrder {
    public med: Med;
    public duration: string = '';
    public dose: string = '';
    public route: string = '';

    constructor(med: Med) {
        this.med = med;
    }
}