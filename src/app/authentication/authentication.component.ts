import { Component, OnInit } from '@angular/core';
import { SerivesService } from '../serives.service';
import { NgForm, EmailValidator, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  registeruserdata={}
  constructor(private _auth: SerivesService) { }

  ngOnInit() {
  }
  
  registeruser(){
    
    // return this._auth.registeruser(this.registeruserdata)
    // .subscribe
    // (
    //   res=>console.log(res),
    //   err=>console.log(err)
    // )
   console.log(this.registeruserdata)
  }

}
