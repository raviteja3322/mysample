import { Component, OnInit } from '@angular/core';
import {MySerivesService} from '../serives/my-serives.service';
import { Posts } from '../employe';
import { Comments } from '../data/comment';
import {postsjson} from '../data/post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { error } from 'protractor';

@Component({
  selector: 'app-serives',
  templateUrl: './serives.component.html',
  styleUrls: ['./serives.component.css']
})
export class SerivesComponent implements OnInit { 

public ravi;

public getemployees1:Comments[];
public post:Posts[];
public errormessage:string;
public objpost:postsjson;

  constructor(private route: ActivatedRoute,private  serives:MySerivesService) { 

  
   //this.getemployees1=this.route.snapshot.data['getlist'];
//this.post=this.route.snapshot.data['getlist'];
   
   
  }
 
  ngOnInit() {

    this.serives.getemployees1()
      .subscribe
      (
          (data) => 
          {
            this.getemployees1 = data
            // error=>this.errormessage=error;
          }
      );

      this.serives.getemployeparam()
      .subscribe
      (
          data => 
          {
            this.post = data
          }
      );

    //   var opost = new postsjson();
    //     opost.body="testbody"
    //     opost.title='testtitle';
    //     opost.userId=5;

    //    this.serives.post(opost)
    //     .subscribe
    //     (
    //         data => this.objpost = data
    //     )
 
       
  }
  
     

}
