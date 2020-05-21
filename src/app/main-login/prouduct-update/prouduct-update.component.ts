import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-prouduct-update',
  templateUrl: './prouduct-update.component.html',
  styleUrls: ['./prouduct-update.component.css']
})
export class ProuductUpdateComponent implements OnInit {

  id:number; 
  data:object = {};
  public products=[];
 
  productobj:any=[]

  private headers=new HttpHeaders({'content-type':'application/json'});
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient) { }



              update(product){
                    this.productobj={
                            "productname":product.productname,
                            "productDescription":product.productDescription,
                            "produCategory":product.produCategory
                          };
                          const url=`${"http://localhost:4300/production"}/${this.id}`;
                          this.http.put(url,JSON.stringify(this.productobj), {headers:this.headers})
                          .toPromise()
                          .then( () =>{
                            this.router.navigate(['/ProductList']);
                          })
                    }
                       
                      
                  

  ngOnInit() {

    this.route.params.subscribe(params=>{
            this.id = +params['id'];
          });
          this.http.get("http://localhost:4300/production").subscribe(
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
