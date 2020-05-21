import { Component, OnInit } from '@angular/core';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  //styleUrls: ['./directive.component.css']
  // template:'<app-depen1injenc></app-depen1injenc> ',
  
  styles:['.online{color:yellow;}']
})
export class DirectiveComponent implements OnInit {

  EvenOddButton=false;

  numbers=[1,2,3,4,5,6];
  
  evennumber=[2,4,6,8];
  oddnumber=[1,3,5,7];

  somerandomvariable:boolean=false;


  serive:string="ofline";
  servers=[];

  clickserve(){
    this.servers.push('test server');
  }


  onremoveserve(servers){
    let index= this.servers.indexOf(servers);
    this.servers.splice(index,1);
  }



constructor() {

 setInterval(() => {
   this.somerandomvariable=!this.somerandomvariable
 }, 5000);
  this.serive=Math.random() > 0.5 ? 'online' : 'ofline';
 }
 
course1=[1,2];

viewmode='map';

selectedcode:string;

countries:any[]=[
  {code:'ind',country:'india'},
  {code:'Uae',country:'United arab Emirates'},
  {code:'$',country:'united State'},
];

choice(code){
  this.selectedcode=code;
}
  

getcolor(){
 return this.serive === 'online'?'green':'red';
}


courses=[
  {id:1, name:'course1'},
  {id:2, name:'course2'},
  {id:3, name:'course3'},

]
clickcouse(){
  this.courses.push({id:4,name:'course4'});
}
onremove(course){
  let index= this.courses.indexOf(course);
  this.courses.splice(index,1);
}

// users:string[]=["john","peter","omed"]


users:any[]=[
  {id:1, name:'john',city:'delhi'},
  {id:2, name:'peter',city:'pune'},
  {id:3, name:'omed',city:'mumbai'}
]
 

  ngOnInit() {
  }

}
