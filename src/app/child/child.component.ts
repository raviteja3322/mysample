import { Component, OnInit, Input, Output, EventEmitter,TemplateRef } from '@angular/core';
import { SerivesService } from '../serives.service';
import { artists } from '../data/post';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() public parentdata:string; //This tells our component to parentdata as an input property from the parent compnent.S
  @Input() public raviteja='';
  @Input() public ARTISTt:string;

  @Input() public headerTemplate: TemplateRef<any>;




  //ViewChild Options
  public name='raviteja';
  public age=29;
  public companyname='Dynata';
  public role='Survey Programmer';
 
  public serivees;

  constructor(private serives:SerivesService) { 

    this.serivees=this.serives.Gethtml();
    
  }
 



  @Output() backsends =new EventEmitter<string>();
  @Output() artist =new EventEmitter<string>();
 

  //public notify:EventEmitter<string>=new EventEmitter<string>();
  public event:EventEmitter<string>=new EventEmitter<string>();
  

  

  ngOnInit() {
    
  }


  eventchange(){
    this.event.emit("code evulation");
  }


  backsend(){
    alert('You Click child components')
      this.backsends.emit("This message from child componets");
  }



 


}
