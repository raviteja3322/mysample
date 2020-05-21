import { Component, OnInit } from '@angular/core';
import { fadeAnimation2,ravi,image,fadeAnimation1,listAnimation } from '../animations';

@Component({
  selector: 'app-module4-component',
  templateUrl: './module4-component.component.html',
  styleUrls: ['./module4-component.component.css'],
  animations: [fadeAnimation2,ravi,image,fadeAnimation1,listAnimation]
})


export class Module4ComponentComponent implements OnInit {
  isOpen;
  stateName='yellowbox';
  showImage = false;
  show = true;
  items = [];

  toggleList() {
    this.items = this.items.length ? [] : [0,1,2,3,4,5,6,7,8,9,10];
  }
  onClick() {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

  switchState(){
    this.stateName = this.stateName === 'yellowbox' ? 'redbox' : 'yellowbox'
   }  
 
  
}
