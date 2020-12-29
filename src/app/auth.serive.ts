import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import{ tokenparam } from './class/tokenparam';
import{ users,role } from './class/users';
import{ products,subcategory} from './class/productlist';
import { ActivatedRoute } from '@angular/router';
import {localstorage} from './localstorageserives';

@Injectable()
export class AuthSerives {
    accesstoken:string="";
    

    constructor(private htpp:HttpClient,private _Activatedroute:ActivatedRoute,private localstorage:localstorage){}

    private token:string='https://shop-auth-ms.herokuapp.com/api/login';
    private apiusers:string='https://shop-auth-ms.herokuapp.com/api/users';
    private apiusersid:string='https://shop-auth-ms.herokuapp.com/api/show_user/';
    private Base_url1 :string='https://shop-auth-ms.herokuapp.com/api/list';

   
    login(employee_id:string,password:string):Observable<tokenparam>{       
        var HeaderfortokenApi=new HttpHeaders({'Content-type':'application/json'});
        var data={employee_id, password}
        return this.htpp.post(this.token, data, { headers: HeaderfortokenApi})
            .map((res :any) => {
              
                console.log(this.token);
                this.accesstoken = res.token;
                return {token:res.token,expires:res.expires};
        });
    } 

    loginByhttpclient(employee_id:string,password:string):Observable<tokenparam>{
        var data={employee_id, password}
        return this.htpp.post<tokenparam>(this.token,data)
    }

    user():Observable<users[]>{
        var  getHeaders=new  HttpHeaders();

        // if(this.accesstoken){
        //     getHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+ this.accesstoken
        // });
        // }
        
        getHeaders.append('Authorization','bearer' +this.localstorage.getvaluefromlocalstorage().token);
        return this.htpp.get(this.apiusers,{headers:getHeaders})
        .map((res:any)=>{
            return res.users;
        })
            
    }

    getuserbyhttpclient():Observable<users[]>{
        return this.htpp.get<users[]>(this.apiusers);
    }
        
    getuserid(id:number){
        let getHeaders: HttpHeaders = null;
            if(this.accesstoken){
                getHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+this.accesstoken
            });
            }
            return this.htpp.get(this.apiusersid+id,{headers:getHeaders})     
    }
    
    GETLIST(): Observable<any>{
        return this.htpp.get<any>(this.Base_url1)
    }
   
    
    loggedIn(){
        return !!localStorage.getItem('Authorization')
    }
          
    
  }

