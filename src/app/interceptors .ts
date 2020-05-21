import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Injectable,Injector } from '@angular/core';
import {localstorage} from './localstorageserives';

@Injectable()
export class interceptors implements HttpInterceptor {
   
    constructor(private Injector:Injector,private localstorage:localstorage){}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{

        if(req.url.indexOf("/Token")>0)
        {
            var headertokenapi=new HttpHeaders({'Content-Type':'application/json'})
            return next.handle(req) 
        }

        var tokendata=this.localstorage.getvaluefromlocalstorage();
        if(tokendata) {
        var authoheader=`Bearer `+tokendata.token;
        const authReq=req.clone({setHeaders: {Authorization: authoheader}}); 
        return next.handle(authReq) 
        }
         return next.handle(req)    
    }
}