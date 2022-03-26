import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  date:any;

  getdate(anydate:any){ 

  this.date=new Date(anydate);
    console.log(this.date);

    return this.date;
  }
}
