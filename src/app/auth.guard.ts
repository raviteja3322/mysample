import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthSerives} from './auth.serive';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
  constructor(private auth:AuthSerives,private route:Router){
  }
  
  canActivate(): boolean{
    if(this.auth.loggedIn()){
      return true
    } else{
      this.route.navigate(['/login'])
      return false
    }

  }
  
}
