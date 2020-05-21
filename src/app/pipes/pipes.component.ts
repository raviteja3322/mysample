import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  Name:string="raviteja"
  Thisday= new Date;
  Eligblepercent:number=12.456789;
  curcountry:number=2.67;
  constructor() { }

  ngOnInit() {
  }

  ravi:any[]=[
    {id:12,name:'ravi'},
    {id:13,name:'tanu'}
  ];

}
