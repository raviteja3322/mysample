import { Component, OnInit, Input, Injectable } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})

export class RegisterviewComponent implements OnInit {

 public id:number;
 public username:string;
 public email:string;
 public Companyname:string;

  constructor(private route:Router,private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
   const id =  this.activatedRoute.snapshot.params.id;
   this.ViewButtonClick(id);    
  }

  backbtn(){
    this.route.navigate(['/registerdetails']);
    
  }

ViewButtonClick(id:number){
    console.log(id);
    this.http.get(`${"http://localhost:3000/product/"}/${id}`)
    .subscribe((res:any)=>{
                this.id = res.id;
                this.username=res.username;
                this.email=res.email;
                this.Companyname=res.companyname;
               
      })
}



backbtn1(){
  this.route.navigate(['/authentication']);
}

        

}
