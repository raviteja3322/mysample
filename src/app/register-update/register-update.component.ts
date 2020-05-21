import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {

  id:number; 
  data:object = {};
  public products=[];
 
  productobj:any=[]

  private headers=new HttpHeaders({'content-type':'application/json'});
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient) { }



              update(product){
                    this.productobj={
                            "username":product.username,
                            "email":product.email,
                            "companyname":product.companyname
                          };
                          const url=`${"http://localhost:3000/product"}/${this.id}`;
                          this.http.put(url,JSON.stringify(this.productobj), {headers:this.headers})
                          .toPromise()
                          .then( () =>{
                            this.router.navigate(['/registerdetails']);
                          })
                    }
                       
                      
                  

  ngOnInit() {

    this.route.params.subscribe(params=>{
            this.id = +params['id'];
          });
          this.http.get("http://localhost:3000/product").subscribe(
              (data: any) => {
                this.products = data;  
                for(var i=0; i<this.products.length; i++){
                  if(parseInt(this.products[i].id)===this.id){
                    this.data=this.products[i];
                    break;
                  }
                }
          })
  }

}
