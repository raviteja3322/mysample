import { Component, OnInit } from '@angular/core';
import { SerivesService } from '../serives.service';
import {postsjson} from '../data/post';
import { json } from '../data/comment';

import { Observable } from 'rxjs/internal/observable';
// import { Pipe, PipeTransform } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

 //HTTP
public employedetails;
jsonserver:json[];
BackendnodejsApi=[];
getemployees1=[];
public  employees=[];
public getlist:any[];
public getuser:any[];
getjson1=[];


istpost:postsjson[];
objpost:postsjson;



  constructor(private dep1 : SerivesService, private _observ : SerivesService) {
    
    this._observ.getemploye()
      .subscribe(
        resp => 
        {
          this.employedetails=resp
        }
    );


    
    this._observ.getjson1().subscribe
    (
      resp=>{
        this.getjson1=resp
      }
    );




    this._observ.getjson()
    .subscribe
    (
        data => 
        {
          this.jsonserver = data
        }
    )
    this._observ.getcomment()
      .subscribe
      (
          data => 
          {
           
            this.BackendnodejsApi = data
            console.log("hii"+this.BackendnodejsApi)
          }
      )

      this._observ.getemployees1()
      .subscribe
      (
          data => 
          {
            this.getemployees1 = data
          }
      )
     


      // this._observ.getpostcomment()
      // .subscribe
      // (
      //     data => 
      //     {
      //       this.istpost = data
      //     }
      // )
     
      // this._observ.getjsonparam()
      // .subscribe
      // (
      //     data => 
      //     {
      //       this.jsonserverpost = data
      //     }
      // )
      
      
      //POST getjson
      //  var opost = new postsjson();
      //  opost.id=5;
      //  opost.name='RaviTanu';
      //  opost.color='bluw';
      //  this._observ.post(opost)
      //  .subscribe
      //  (
      //      data => this.objpost = data
      // )
   }
  //  getSelected(name:name){
  //   this.getuser.filter();
  //  }
 
   ngOnInit() {
    // this._observ.getemployees()
    //  .subscribe(
    //    resemployedata => this.employees=resemployedata
    //  );
   }
 

  

   
}
