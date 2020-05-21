import { Component, OnInit } from '@angular/core';
//import { interfacename } from 'C:\Users\Anumolu\mysample\src\app\practic';

//src\app\practic\interface.ts
@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent  {

public Raviteja='i im kuchipudi';


Sid:number=100;
Sname:string="ravi"; 





studentname(){
  return this.Sname;
}
public num1: number;
public num2: number;

btnstatus1:boolean=false;
studentcreatestatus:string='no status was created';
servername='';
serverCreated='';


STUDENT='';

Studentname='ravi';


STUDENTS=['RAVI','TEJA','GOPI'];
months = ["January", "Feburary", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"];


changemonths(event) {
  // console.log("Changed month from the Dropdown");
  // console.log(event);
  alert("Changed month from the Dropdown");
}


constructor(){
  this.num1=5;
  this.num2=100;
setTimeout(() => {
  this.btnstatus1=true;
}, 5000);
}
onclick(){
  this.Sname='Change Event'+ this.servername;
}

 onupdateservername(event: Event){
   this.servername=(<HTMLInputElement>event.target).value;
 }
 servercreate(){
   //this.serverCreated=this.servername;
    this.studentcreatestatus='Status Was Created' +this.servername;
   }

onUpdateStudent(event: Event){
  this.Studentname=(<HTMLInputElement>event.target).value;
}
oncreatestudent(){
  this.STUDENT=this.Studentname;
  this.STUDENTS.push(this.Studentname);
}

public name="Class-Binding";
public succcessclass="text-sucess";
public haserror=true;
public isspeical=true;
public messageclass={
  "text-sucess":!this.haserror,
  "text-dange":this.haserror,
  "text-special":this.isspeical
}
public hascolor=false;
public helightcolor="yellow";
public colorobjects={
  color:"blue",
  fontStyle:"italic"
}



}
