import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MySerivesService} from './serives/my-serives.service';
import { Comments } from './data/comment';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Comments[]> {
  constructor(private seriv:MySerivesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> {
    //return this.seriv.getemployees1(); 
    return this.seriv.getemployeparam(); 
  }

  
}
