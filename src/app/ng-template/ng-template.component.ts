import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {
   
  public somerandomvariable:boolean=true;
  public visible=true;
  
  constructor() {

    setInterval(() => {
      //this.somerandomvariable=!this.somerandomvariable
    }, 5000);
    
    
   }

  ngOnInit() {
  }

 

  tempa(value){
    this.visible=!this.visible;
    console.log(value)
  }

}
