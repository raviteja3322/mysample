import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { RegisterviewComponent } from '../registerview/registerview.component';
import {MySerivesService} from '../serives/my-serives.service';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  public products=[];
  public id:number;
  
  //public getRegisterdetails=[];
 
  constructor(private rout:Router,private http:HttpClient,private registerview:RegisterviewComponent,private serives: MySerivesService) {

    // this.serives.getRegisterDetails()
    //   .subscribe(
    //     resp => 
    //     {
    //       this.getRegisterdetails=resp
    //     }
    // );


  }


  getData=function () {
    this.http.get("http://localhost:3000/product")
      .subscribe(
        (res:Response)=>{
          this.products = res;  
    })
  }
  
  ngOnInit() {
    this.getData();
  }

  deleteproduct=function(id){
    if(confirm("Are you Sure Want To Delete")) {
      const url=`${"http://localhost:3000/product/"}/${id}`;
      return this.http.delete(url,{headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      })
    }
  }

  
  // public ViewButtonClick(id:number){
  //   this.registerview.ViewButtonClick(id);
  // }

  backbtn(){
    this.rout.navigate(['/authentication']);
  }

}
