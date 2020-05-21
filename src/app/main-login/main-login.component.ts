import { Component, OnInit } from '@angular/core';
import { MainSerivesService } from './main-serives.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
 
  submitted = false;
public loginSuccess= false;
  // loginForm: FormGroup;
  // loading = false;
  // get f() { return this.loginForm.controls; }

  constructor(private routes : Router, private service : MainSerivesService, private formBuilder: FormBuilder) { }
   msg="";

  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }

  check(uname: string, p : string)
  {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
     this.routes.navigate(['/EmpCreate']);

      console.log("module in login")
      //this.routes.navigate(['./module1']);
      
      //this.loginSuccess=true;

    }
    else{
       this.msg ='Invalid username or password';
    }
 
 
}

}
