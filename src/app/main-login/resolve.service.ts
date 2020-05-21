import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MainSerivesService } from '../main-login/main-serives.service';

//import { Comments } from './data/comment';
import { Observable } from 'rxjs/observable';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {
  path="";
  constructor(private seriv:MainSerivesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    
    return forkJoin([
      this.seriv.getProductionDetails(),
      this.seriv.getcreateDetails()
      .catch(error => {
          return Observable.throw(error);
      })
      ]).map(result => {
      return {
          products: result[0],
          details: result[1]
      };
   

});
 


   



    
// if(this.path == "ProductList"){
//  return this.seriv.getProductionDetails(); 
// } else {
//   return this.seriv.getcreateDetails();
// }

      //  if(this.seriv.getProductionDetails){
      //    return this.seriv.getProductionDetails();
      //  } else if (this.seriv.getcreateDetails){
      //     return this.seriv.getcreateDetails();
      //  }else {
       
      // }

      // let getProductionDetails = this.seriv.getProductionDetails();
      // let getcreateDetails = this.seriv.getcreateDetails();

      // let getproduct = {getProductionDetails: getProductionDetails}
      // return Observable.of(getproduct);

      // let getcreate = {getcreateDetails: getcreateDetails}
      // return Observable.of(getcreate);

     
  }

  
}
