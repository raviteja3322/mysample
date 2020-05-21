import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  clientid:number=100;
  clientstatus:string='offline';
 
  constructor(){
    this.clientstatus=Math.random()>0.2? 'online':'offline';
  }
 getclientstatus(){
  return this.clientstatus;
 }
 getcolour(){
   return this.clientstatus === 'online'? 'green' :'red';
 }

 showsecret=false;
  log=[];
  onToggledetails(){
    this.showsecret=!this.showsecret;
    this.log.push(new Date());
  }
  ngOnInit() {
  }

}
