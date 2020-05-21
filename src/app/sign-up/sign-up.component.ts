import { Component, OnInit } from '@angular/core';
import {MySerivesService} from '../serives/my-serives.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  mobNumberPattern  = "^((\\+91-?)|0)?[0-9]{10}$";  

  submitted=false;

  private formdata: any = {};  

  private recieved: Array<any>;  
  
  constructor(private service: MySerivesService) {  
      this.recieved = this.service.recieveData();  
  }  
  
  ngOnInit(): void {  
  }  
 
  submit(): void {
    this.service.postdata(this.formdata);     
    this.submitted=true;
    
  }


  }  
  export class User {  
    mobileNumber ?: string;  
   }
  


