import { Component,ViewChild, OnInit} from '@angular/core';
import { NgForm, EmailValidator, FormGroup, FormControl, Validators} from '@angular/forms';
import {superhero} from './superhero';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  weapon=['tt','ff','hh','ss','cc']
  speciality=['a','b','c','d','e']
  model=new superhero(1,'',this.weapon[0],this.speciality[0],'');
  
  defacultquestion='ravi';


  
  answer='';
  genders=['male','female'];



  submitted=false;

  onsubmit2(){
    this.submitted=true;
  }



  submitted1=false;
  onSubmit(form: NgForm){
    console.log(form);
    this.submitted1=true;
  }

  submitte=false;
  onsubmit3(){
    this.submitte=true;
  }

  
// Reactive Form
 signUpForm: FormGroup;

 ngOnInit() {
   this.signUpForm = new FormGroup({
     'userdata':new FormGroup({
     'Username': new FormControl(null,Validators.required),
      'Email'   : new FormControl(null,[Validators.required, Validators.email]),
      }),
     'Username': new FormControl(null,Validators.required),
     'Email'   : new FormControl(null,[Validators.required, Validators.email]),
     'gender'  : new FormControl('female')
   });
 }

 onSubmit1(){ 
   console.log(this.signUpForm.value);
   console.log(this.signUpForm.controls['Username'].value);
 }
 


  
  
   // onSubmit(){
  //   console.log('Submitted')
  // }
  

  // suggestUsername(){
  //   const suggestedName='superuser';
  //   this.signupForm.form.patchValue({
  //     userdata:{
  //       username: suggestedName
  //     }
  //   });
  // }
  // user={
  //   username:'',
  //   email:'',
  //   secretquestion:'',
  //   answer:'',
  //   gender:'',
  // }
  //  submited =false;

  //  @ViewChild('f') signupForm: NgForm;
  //   OnSubmit(){
  //     this.submited=true;
  //    console.log(this.signupForm);
  //    this.user.username=this.signupForm.value.userdata.username;
  //    this.user.email=this.signupForm.value.userdata.email;
  //    this.user.secretquestion=this.signupForm.value.secret;
  //    this.user.answer=this.signupForm.value.questionAnswer;
  //    this.user.gender=this.signupForm.value.gender;
  //    this.signupForm.reset();
  //  }



 

  log(x){
    console.log(x)
  }
 
  constructor() { }



}
