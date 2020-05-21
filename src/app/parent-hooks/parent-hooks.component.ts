import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-hooks',
  templateUrl: './parent-hooks.component.html',
  styleUrls: ['./parent-hooks.component.css']
})
export class ParentHooksComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  
  parentExist:boolean=true;

 

  value:string;
  submit(val){
    this.value=val.value;
  }


  Destory(){
    //this.parentExist=false;
    this.parentExist=!this.parentExist;
  }

}
