import { Component, OnInit } from '@angular/core';
import {AuthSerives} from '../auth.serive';
import{ users,role } from '../class/users';
import {Router, ActivatedRoute} from '@angular/router';
import{ products,subcategory,product} from '../class/productlist';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {
  private sub: any;
  public user : users;
  
  getlist:products[];
 
  
  selProduct: products;
  
  constructor(private authserives:AuthSerives,private route:ActivatedRoute,private rout:Router) {
      
   }

   ngOnInit() { 
    

    this.sub = this.route.params.subscribe(params => {
      this.authserives.getuserid(params['id'])
      .subscribe((data:any) => {
        this.user = data.user;
      })

      
      this.authserives.GETLIST()
      .subscribe(
        data=>
        {
          this.getlist=data.products
        }
      )
      // this.authserives.GETLIST1()
      // .subscribe(
      //   data=>
      //   {
      //     this.subcategorys=data
      //   }
      // )
      
   });
   }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onChange(user:any):void {
    user.checked = !user.checked;
   } 



   onClick(name: any) : void {
     this.selProduct = this.getlist.find(res => res.name === name);
   }

   backbtn(){
    this.rout.navigate(['/displaydata']);
   }

   Logout() {
    localStorage.removeItem('Authorization');
    localStorage.clear();
    this.rout.navigate(['/login']);
  }






  
}
