import { Component, OnInit,Output,Input, ViewChild, EventEmitter,TemplateRef, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy  } from '@angular/core';


@Component({
  selector: 'app-child-hooks',
  templateUrl: './child-hooks.component.html',
  styleUrls: ['./child-hooks.component.css']
})
export class ChildHooksComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {
 
  @Input() public myValue="ravteja";


  counter;
  num:number=1;
  public ravi:string;
  constructor() { 
    console.log('Constructor called')
  }

  ngOnChanges(changes:SimpleChanges) {
    //console.log('ngOnChanges called'+' '+ changes.myValue.currentValue);
    console.log(changes.myValue.currentValue);
  }

 
  ngOnInit() {
    console.log('ngOnInit called')
    // this.counter=setInterval(() => {
    //   this.num=this.num+1;
    //   console.log(this.num)
    // }, 1000);
  }

  ngDoCheck(){
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
     console.log('ngOnDestroy called')
    // clearInterval(this.counter);
  }

}
