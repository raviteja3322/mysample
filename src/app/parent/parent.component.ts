import { Component, OnInit,ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SerivesService } from '../serives.service';
import { artists } from '../data/post';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit,OnInit,AfterViewChecked {

   artist=artists;

  @ViewChild(ChildComponent, {static: false}) child;

    public usertext:string="";
    public parent ="raviteja";
    public message="";
    public ravi:string;
    public serivees;
    
    public headerTemplate="RAVITEJA";
    
      constructor(private serives:SerivesService) { 
        
      }
 
  ngOnInit(){
    this.serivees=this.serives.Gethtml();
  }

  newmessage(){
    //this.serivees.Gethtml("Hello ravi");
  }




  ngAfterViewInit() {
    this.ravi=this.child.role;
    
  }
  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
  }



 
  messa(data){
    this.message=data;
  }

  onARTIST(){

  }

}
