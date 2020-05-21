import { Component, OnInit,ViewChild } from '@angular/core';
import { CustomDirectiveDirective } from '../Directives/custom-directive.directive';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

public  pipe="This is Pipe tag";
public  message='';

 //@ViewChild(CustomDirectiveDirective, {static: false}) custom;

  constructor() { }


  ngOnInit() {
   
  }

  // colourchange(color:string){
  //   this.custom.change(color);
  // }

  click(data){
    //alert('This is @output Directives');
    this.message=data
  }

 

 
}
