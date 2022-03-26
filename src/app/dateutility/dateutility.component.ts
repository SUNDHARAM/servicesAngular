import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-dateutility',
  templateUrl: './dateutility.component.html',
  styleUrls: ['./dateutility.component.css']
})
export class DateutilityComponent implements OnInit {

  constructor(public date: DateService) { }

  ngOnInit(): void {
  }

    days:number=0;
    months:number=0;
    diff:any;
    day:any;
    date1:any;
    date2:any;

   calculate(dateForm:any){

    this.date1=this.date.getdate(dateForm.value.firstdt);
    this.date2=this.date.getdate(dateForm.value.secdt);

    this.diff = Math.floor(this.date2 - this.date1);
    this.day = 1000 * 60 * 60 * 24;

    this.days = Math.floor(this.diff/this.day);
    this.months = Math.floor(this.days/31);
  }
}
