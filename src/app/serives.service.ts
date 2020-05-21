import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { Posts } from './employe';
import { postsjson } from './data/post';
import {comment} from './data/comment';
import 'rxjs/add/operator/map';
import { observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { artists } from './data/post';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';



import employess from './data/employess.json';


export interface Person {
  id: string;
  isActive: boolean;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  disabled?: boolean;
}


@Injectable()
export class SerivesService {


constructor(private http: HttpClient){}

private _url1:string ='https://jsonplaceholder.typicode.com/posts ';


getemployees1():Observable<any>{
 return this.http.get<any>(this._url1)
}



getArtists(){
  return artists;
  }
  

//Front End Api
getemploye():Observable<comment[]>{
    return new Observable(observer=>{
      observer.next(employess) 
        console.log(employess)
    })
  }
  
 //HTTP ./data/employess.json 
 private _url:string ='./data/employess.json ';


 getemployees():Observable<any>{
  return this.http.get<any>(this._url)
    .map((response:Response) => response.json()
    );
}






//Json - Server
private _URL:string='http://localhost:5555/product';

getjson(): Observable<any>{
   return this.http.get<any>(this._URL)
}



private ravi:string='http://localhost:9999/product';


getjson1(): Observable<any>{
  return this.http.get<any>(this.ravi)
}

// getjsonparam(): Observable<any>{
//   let parm1=new HttpParams().set("id","1");
//   return this.http.get("http://localhost:5555/product",{params:parm1});
// }

// postjson(opost:postsjson): Observable<any>{
//   return this.http.post("http://localhost:5555/product",opost);
// }


//Node Js  Backend Api

getcomment(): Observable<any>{
  return this.http.get("/api/employees");
}





  getpostcomment(): Observable<any>{
    let parm1=new HttpParams().set("user id","1");
    return this.http.get("https://shop-auth-ms.herokuapp.com",{params:parm1});
  }

  post(opost:postsjson): Observable<any>{
    return this.http.post("https://shop-auth-ms.herokuapp.com",opost);
  }
  

//Authenticate
  private _registerurl:string ="/assets/data/comment.ts";
  
  registeruser(user){
    return this.http.post<any>(this._registerurl,user);
  }

  
 

  getuser(id:number){
    return this.http.get("htttp//google.com"+id)
  }


  //Dependy Injection
  news =[
    {id:1,name:'ravi',age:28},
    {id:2,name:'tanu',age:24},
    {id:3,name:'gopi',age:30}
  ];

  getnews(){
    return this.news;
  }

  table=[
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  gettable(){
    return this.table;
  }

  
  Gethtml(){
    return  "Hello I'am serives!!"
  }

   data=[
    {id:1,name:'ravi'},
    {id:2,name:'tanu'},
    {id:3,name:'gopi'},
    {id:4,name:'mani'}
   ]
   getdata(){
     return this.data;
   }

  
  getPeople(term: string = null): Observable<Person[]> {
    let items = getMockPeople();
    if (term) {
        items = items.filter(x => x.name.toLocaleUpperCase().indexOf(term.toLocaleUpperCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
}

function getMockPeople() {
return [
    {
        'id': '5a15b13c36e7a7f00cf0d7cb',
        'index': 2,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 23,
        'name': 'Karyn Wright',
        'gender': 'female',
        'company': 'ZOLAR',
        'email': 'karynwright@zolar.com',
        'phone': '+1 (851) 583-2547'
    },
    {
        'id': '5a15b13c2340978ec3d2c0ea',
        'index': 3,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 35,
        'name': 'Rochelle Estes',
        'disabled': true,
        'gender': 'female',
        'company': 'EXTRAWEAR',
        'email': 'rochelleestes@extrawear.com',
        'phone': '+1 (849) 408-2029'
    },
    {
        'id': '5a15b13c663ea0af9ad0dae8',
        'index': 4,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 25,
        'name': 'Mendoza Ruiz',
        'gender': 'male',
        'company': 'ZYTRAX',
        'email': 'mendozaruiz@zytrax.com',
        'phone': '+1 (904) 536-2020'
    },
    {
        'id': '5a15b13cc9eeb36511d65acf',
        'index': 5,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 39,
        'name': 'Rosales Russell',
        'gender': 'male',
        'company': 'ELEMANTRA',
        'email': 'rosalesrussell@elemantra.com',
        'phone': '+1 (868) 473-3073'
    },
    {
        'id': '5a15b13c728cd3f43cc0fe8a',
        'index': 6,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'name': 'Marquez Nolan',
        'gender': 'male',
        'company': 'MIRACLIS',
        'disabled': true,
        'email': 'marqueznolan@miraclis.com',
        'phone': '+1 (853) 571-3921'
    },
    {
        'id': '5a15b13ca51b0aaf8a99c05a',
        'index': 7,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 28,
        'name': 'Franklin Jameswe',
        'gender': 'male',
        'company': 'CAXT',
        'email': 'franklinjames@caxt.com',
        'phone': '+1 (868) 539-2984'
    },
    {
        'id': '5a15b13cc3b9381ffcb1d6f7',
        'index': 8,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 24,
        'name': 'Elsa Bradley',
        'gender': 'female',
        'company': 'MATRIXITY',
        'email': 'elsabradley@matrixity.com',
        'phone': '+1 (994) 583-3850'
    },
    {
        'id': '5a15b13ce58cb6ff62c65164',
        'index': 9,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 40,
        'name': 'Pearson Thompson',
        'gender': 'male',
        'company': 'EZENT',
        'email': 'pearsonthompson@ezent.com',
        'phone': '+1 (917) 537-2178'
    },
    {
        'id': '5a15b13c90b95eb68010c86e',
        'index': 10,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'name': 'Ina Pugh',
        'gender': 'female',
        'company': 'MANTRIX',
        'email': 'inapugh@mantrix.com',
        'phone': '+1 (917) 450-2372'
    },
    {
        'id': '5a15b13c2b1746e12788711f',
        'index': 11,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 25,
        'name': 'Nguyen Elliott',
        'gender': 'male',
        'company': 'PORTALINE',
        'email': 'nguyenelliott@portaline.com',
        'phone': '+1 (905) 491-3377'
    },
    {
        'id': '5a15b13c605403381eec5019',
        'index': 12,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 31,
        'name': 'Mills Barnett',
        'gender': 'male',
        'company': 'FARMEX',
        'email': 'millsbarnett@farmex.com',
        'phone': '+1 (882) 462-3986'
    },
    {
        'id': '5a15b13c67e2e6d1a3cd6ca5',
        'index': 13,
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'age': 36,
        'name': 'Margaret Reynolds',
        'gender': 'female',
        'company': 'ROOFORIA',
        'email': 'margaretreynolds@rooforia.com',
        'phone': '+1 (935) 435-2345'
    },
    {
        'id': '5a15b13c947c836d177aa85c',
        'index': 14,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 29,
        'name': 'Yvette Navarro',
        'gender': 'female',
        'company': 'KINETICA',
        'email': 'yvettenavarro@kinetica.com',
        'phone': '+1 (807) 485-3824'
    },
    {
        'id': '5a15b13c5dbbe61245c1fb73',
        'index': 15,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 20,
        'name': 'Elisa Guzman',
        'gender': 'female',
        'company': 'KAGE',
        'email': 'elisaguzman@kage.com',
        'phone': '+1 (868) 594-2919'
    },
    {
        'id': '5a15b13c38fd49fefea8db80',
        'index': 16,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 33,
        'name': 'Jodie Bowman',
        'gender': 'female',
        'company': 'EMTRAC',
        'email': 'jodiebowman@emtrac.com',
        'phone': '+1 (891) 565-2560'
    },
    {
        'id': '5a15b13c9680913c470eb8fd',
        'index': 17,
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'age': 24,
        'name': 'Diann Booker',
        'gender': 'female',
        'company': 'LYRIA',
        'email': 'diannbooker@lyria.com',
        'phone': '+1 (830) 555-3209'
    },
  ]
  
   // HTTP Error Handling

  //  getemploye lopala untundhii  .catch(this.errorHandler);
  // errorHandler(error: HttpErrorResponse ){
  //   return observable.throw(error.message || "server error");
  // }
   
}