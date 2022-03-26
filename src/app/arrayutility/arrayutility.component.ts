import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-arrayutility',
  templateUrl: './arrayutility.component.html',
  styleUrls: ['./arrayutility.component.css']
})
export class ArrayutilityComponent implements OnInit {

  constructor(public array:ArrayService) { }

  ngOnInit(): void {
  }
  
  listitem:string="";
  list:any=[];
  
  additem(){
    this.list=this.array.getarray(this.listitem);
    this.listitem="";
    console.log(this.list);
  }

  deleteItem(i: number) {
    this.list.splice(i, 1);
  }

  getSort(){
    var x=this.list.sort((n1:string,n2:string) =>n1.localeCompare(n2));
    console.log(x);
  }

  getReverse(){
    var y=this.list.reverse();
    console.log(y);
  }

  isEmpty(){
    if(this.list.length==0)
      return true;
    else
      return false;
  }

}
