import { ThrowStmt } from '@angular/compiler';
import { stringify } from 'querystring';
import { MedOrder } from './medOrder.model';

export class Patient {
    public id: number;
    public firstName: string;
    public lastName: string;
    public gender: string;
    public age: string;
    public room: string;
    public roomColor: string;
    public medOrders: MedOrder[]; 

    constructor(id: number, firstName: string, lastName:string, gender:string, age: string,
        room: string, roomColor: string, medOrders: MedOrder[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.room = room;
        this.roomColor = roomColor;
        this.medOrders = medOrders;
    }
    addMedOrder(medOrder: MedOrder) {
        this.medOrders.push(medOrder);
    }
}