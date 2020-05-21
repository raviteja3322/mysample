import { Injectable } from '@angular/core';
import{ tokenparam } from './class/tokenparam';


@Injectable()
export class localstorage {
  static setItem: any;

    setAuthorizationdata(auth: tokenparam):void{
        localStorage.setItem("Authorization",JSON.stringify(auth));
    }

    getvaluefromlocalstorage():tokenparam{
        let tokendata=JSON.parse(localStorage.getItem("Authorization"));
        return tokendata==null? null:tokendata;
    }
}