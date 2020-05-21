import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { MainSerivesService } from '../main-serives.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-prouduct-create',
  templateUrl: './prouduct-create.component.html',
  styleUrls: ['./prouduct-create.component.css']
})
export class ProuductCreateComponent implements OnInit {

  public raviteja:string="raviteja";
  emailFormControl = new FormControl('', [Validators.required,Validators.email,]);
  
  ProductName = new FormControl('', [Validators.required]);
  productDescription = new FormControl('', [Validators.required]);
  produCategory = new FormControl('', [Validators.required]);

  constructor(private http:HttpClient,private rout: Router,private serives: MainSerivesService) { 
    
  }

 public productobj:object={};

 public submitted=false;

  
  addnewproduct=function(productdata){
    this.submitted=true;
    console.log(productdata);
    
    this.productobj={
      "productname": productdata.productname,
      "productDescription" : productdata.productDescription,
      "produCategory" : productdata.produCategory,
    }

    this.http.post("http://localhost:4300/production/",this.productobj)
    .subscribe((res:Response)=>{
      console.log(res);
     })
    alert("Successfully")
    this.rout.navigate(['/ProductList']);
  }


  submitvalue(){

  }


  


  ngOnInit() {
   
  }

}

