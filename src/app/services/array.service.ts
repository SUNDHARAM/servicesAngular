import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }
 
  list:string[]=new Array();

  getarray(listitem:string){

    this.list.push(listitem);
    console.log(this.list);

    return this.list;
  }

}
