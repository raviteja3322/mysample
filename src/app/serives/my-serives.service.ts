import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Posts } from '../employe';
import { postsjson } from '../data/post';
import { Comments } from '../data/comment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{product} from '../product.json';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import 'rxjs/Rx';
import { error } from 'protractor';
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MySerivesService {

  private Listdata: Array<any> = [];  
  
    

  recieveData(): Array<any> {  
      return this.Listdata;  
  }  

  postdata(item: any) {  
      this.Listdata.push(item);  
  }  





  
constructor(private http:HttpClient,private route:Router) {
  
}


private _url1:string ='https://jsonplaceholder.typicode.com/posts';

getemployees1():Observable<Comments[]>{
 return this.http.get<any>(environment.api_url)
              
 }
 
 private apiurl = "https://jsonplaceholder.typicode.com/photos";
  
   getData() {
      return this.http.get(this.apiurl);
   }
         



getemployeparam(): Observable<any>{
  let parm1=new HttpParams().set("userId","1");
  return this.http.get(environment.api_url,{params:parm1});
}

post(opost:postsjson): Observable<any>{
  return this.http.post("https://jsonplaceholder.typicode.com/posts",opost);
}



 

// .catch((error)=>{
              //      return Observable.throw(error);
              // })
              // .catch(this.errorHandler);
//  errorHandler(error:HttpErrorResponse){
//   return Observable.throw(error.message || "server error")
//  }
      

gethtml(){
  return  "Hello I'am serives!!"
}




private _URL:string='http://localhost:3000/product';

getRegisterDetails(): Observable<any>{
   return this.http.get<any>(this._URL)
}




}
























 


