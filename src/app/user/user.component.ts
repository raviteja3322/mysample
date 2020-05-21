import { Component, OnInit,Input} from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { SerivesService } from '../serives.service';
import {Employee} from '../eemploye';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  employe:Employee[]; 
  modifieldtext:string;


  user:any;
  public getid;

  @Input()
  selrole:any;
  
  constructor(private router:ActivatedRoute, private dep1 : SerivesService,private rout:Router) { }
  


  data=[
    {id:1,name:'ravi'},
    {id:2,name:'tanu'},
    {id:3,name:'gopi'},
    {id:4,name:'mani'}
  ]

  onemployeselected(val:any)
  {    
    this.modifieldtext= "The Selected name is " + val.name + " and  selected value was "+val.id
  
  }



  


  ngOnInit() { 

  

     this.router.paramMap.subscribe((HttpParams:ParamMap)=>{
       let id=parseInt(HttpParams.get('id'));
       this.getid=id;
     })
    
  }

              homepage(){
                this.rout.navigate(['/home']);
              }


              
              back(){
                  let previousid=this.getid -1;
                  this.rout.navigate(['/user',previousid]);
              }
              next(){
                let nextid=this.getid +1;
                  this.rout.navigate(['/user',nextid]);
              }



}


  // let id= parseInt(this.router.snapshot.paramMap.get('id'));
    // this.getid=id;