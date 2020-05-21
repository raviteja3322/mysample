import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MainSerivesService } from '../main-serives.service';
import { AppConfirmEqualValidatorDirective } from '../app-confirm-equal-validator.directive';


@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


    constructor(private formBuilder: FormBuilder,private http:HttpClient,private rout: Router
      ,private MainSerivesService: MainSerivesService) { }

    
      get registerFormControl() {
        return this.registerForm.controls;
      }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

  ngOnInit() {
        this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email:    ['', [Validators.required, Validators.email]],
        companyname: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, this.MainSerivesService.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
        },
          {
            validator: this.MainSerivesService.MatchPassword('password', 'confirmPassword'),
          }
        );
  }



    onSubmit() {
       this.submitted = true;
 
        
        if (this.registerForm.invalid) {
            return;
        }

        var formData: any = { 
          username  :this.registerForm.get('username').value,
          email  :this.registerForm.get('email').value,
          companyname  :this.registerForm.get('companyname').value,       
        }
          

        this.http.post("http://localhost:1233/employe/", formData)
        .subscribe((res:Response)=>{
          console.log(res);
         })
        alert("Successfully")
        this.rout.navigate(['/EmpList']);
       
    }
}
