import { Directive ,ElementRef,HostListener,Input,HostBinding, AfterViewInit,Output,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
 
element:ElementRef
  
constructor(private el:ElementRef) { 
    // console.log(el);
    // el.nativeElement.style.backgroundColor="orange";
    // this.element=el;
    //@HostBinding('style.backgroundColor') backgroundColor:string='transparent'; //this.backgroundColor='blue';
  //this.backgroundColor='transparent';
}

@Input() forecolour:string;
@Input() bgColour:string;
@Input() Colour:string;

@Output() event:EventEmitter<string>=new EventEmitter<string>();




@HostListener('mouseenter') onmouseenter(){
  this.mouseover('yellow','red');

  this.event.emit("Child To Parent using @output Directives");

  this.el.nativeElement.style.color=this.forecolour;
  this.el.nativeElement.style.backgroundColor=this.bgColour;
  this.el.nativeElement.style.backgroundColor=this.Colour;
}

@HostListener('mouseleave') onmouseleave(){
  this.mouseover(null,null);
 
  this.el.nativeElement.style.color=null
  this.el.nativeElement.style.backgroundColor=null;
  this.el.nativeElement.style.backgroundColor=null;
}

private mouseover(bgcolour:string,txtcolor:string){
  this.el.nativeElement.style.backgroundColor=bgcolour;
  this.el.nativeElement.style.color=txtcolor;
}




ngOnInit(bgcolour:string){

  this.element.nativeElement.innerText +="-from directive";

}

@HostListener('keyup') onkeyup(){
  if(this.el.nativeElement.value<0 || this.el.nativeElement.value>10){
    this.el.nativeElement.style.backgroundColor="red"
  }
  else{
    this.el.nativeElement.style.backgroundColor="green"

  }
}





// ngAfterViewInit(){
//   this.el.nativeElement.style.color='red';
// }

// change(color:string){
//   this.el.nativeElement.style.color=color;
// }



}
