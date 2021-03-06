import { Component, OnInit } from '@angular/core';
import {AuthSerives} from '../auth.serive';
import { Router } from '@angular/router';
import{ users,role } from '../class/users';
import {localstorage} from '../localstorageserives';
import { SerivesService } from '../serives.service';
import { tokenparam } from '../class/tokenparam';


@Component({
  selector: 'app-displaydata',
  templateUrl: 'displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

public  isLoggedIn = false;
public  token:any;
public  displaytoken:string;
public  userDetails:users[];
public  role:role[];
public  selrole:role[];
public  artists = [];
 
constructor(private autho:AuthSerives,private serives: SerivesService, private router:Router, private localstorage:localstorage) { 
    const authToken: tokenparam = this.localstorage.getvaluefromlocalstorage();
    if(authToken) {
    this.displaytoken=authToken.token;
    this.autho.getuserbyhttpclient()
    .subscribe(
      (data: any)=>{
          this.userDetails=data.users;
          console.log("Data"+this.displaytoken)
      }    
    );
    }
}


  ngOnInit() {
    this.getArtists();
  }

  getArtists (){
    this.artists = this.serives.getArtists();
   }
  
 
  onClick(id: any) : void {
    const user = this.userDetails.find(product =>product.id ===id);
    this.selrole = user.role;
  }

  Logout() {
    localStorage.removeItem('Authorization');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  backbtn(){
    this.router.navigate(['/login']);
  }


}
