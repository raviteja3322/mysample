import { Component, OnInit } from '@angular/core';
import{ tokenparam } from '../class/tokenparam';
import {AuthSerives} from '../auth.serive';
import { Router } from '@angular/router';
import {localstorage} from '../localstorageserives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenparam:tokenparam;
  employee_id:string;
  password:string;
  constructor(private autho:AuthSerives,private router:Router,private localstorage:localstorage) { }

  ngOnInit() {
  }

  Dologin(): void{
    this.autho.loginByhttpclient(this.employee_id,this.password)
      .subscribe(
        data=>{
          this.localstorage.setAuthorizationdata(data);
          //localstorage.setItem('Authorization',data.token)
          //this.tokenparam=data;
          //this.autho.accesstoken=this.tokenparam.token;
          this.router.navigate(['/displaydata']);
        })
  }

}
