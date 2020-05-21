import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import {MySerivesService} from '../serives/my-serives.service';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  public raviteja:string="raviteja";
  constructor(private http:HttpClient,private rout: Router,private serives: MySerivesService) { 
    
  }

 public productobj:object={};

 public submitted=false;

  
  addnewproduct=function(productdata){
    this.submitted=true;
    console.log(productdata);
    
    this.productobj={
      "username": productdata.username,
      "email" : productdata.email,
      "companyname" : productdata.companyname,
    }

    this.http.post("http://localhost:3000/product/",this.productobj)
    .subscribe((res:Response)=>{
      console.log(res);
     })
    alert("Successfully")
    this.rout.navigate(['/registerdetails']);
  }


  submitvalue(){

  }


  


  ngOnInit() {
   
  }

}
