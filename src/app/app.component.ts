import { Component } from '@angular/core';
//import { interfacename } from './practic/interface';

//import { mobile } from './server/mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:['h1{background-color:yellow}']
})
//implements  interfacename
export class AppComponent {
  public title1 = 'mysample';
  public empid:number;
  public empname:string;
  public salary:number;
  constructor(){
    this.empid=12;
    this.empname="ravi";
    this.salary=1288;
  }
loadedfeature='recipes';
onNavigate(feature: string){
    this.loadedfeature=feature;
  }
  somerandomvariable:boolean=false;
  
}
//  //..........Interface.........................




// //emp: interfacename[]=[
//   //{empid:1,empname:'ravi',salary:2000},
// //{empid:2,empname:'teja',salary:3000},
// //{empid:3,empname:'gopi',salary:4000}
// //]



//   //..........Data type..........................

//   Name:string="Ravi";
//   Score:number=28;
//   Height:number=5.5;
//   isVaild:boolean=true;
//   coloris=color[1];
//   colorisindex=color.blue;
//   dontknow: any=33;



//   //..............NGlf create....................

//   display: boolean =false;
//   //salary:number=5000;

//   //.............function  create...............

//   countis:number=0;
//   functionclick(){
//     this.countis=this.countis+1;
//   }

//   //.............object is create..............

// obj:mobile=new mobile(45);

// //...............constructor................

// constructor(){
//   console.log("app constuctioe executed")
// }
//   buttonclick(){
//     alert("this app");
// this.obj.buttonclicked();

//   }
  
// }
// enum color{
//   red,green,blue
// }
