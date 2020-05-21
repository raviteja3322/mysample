import { Component, OnInit } from '@angular/core';
import {Employee} from '../eemploye';
import { SerivesService } from '../serives.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {
  employe:Employee[]; 
  empidselectd:number;
  //empidselectd:any={}
  modifieldtext:string;
  title;

  

  constructor(private dep1 : SerivesService) {
    this.title=dep1.getdata();
  }


  data=[
    {id:1,name:'ravi'},
    {id:2,name:'tanu'},
    {id:3,name:'gopi'},
    {id:14,name:'mani'}
  ]


employee =[
    {id:1,name:'ravi'},
    {id:2,name:'tanu'},
    {id:3,name:'gopi'},
    {id:4,name:'mani'}
];

ngOnInit() 
{
  // this.employe =[
  //   {id:1,name:'ravi'},
  //   {id:2,name:'tanu'},
  //   {id:3,name:'gopi'},
  //   {id:4,name:'mani'}
  // ];

  this.empidselectd=this.data[3].id;
 
  

}

onemployeselected(val:any)
{    
  this.modifieldtext= "The Selected name is " + val.name + " and  selected value was "+val.id

}

}
