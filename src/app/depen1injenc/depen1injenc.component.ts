import { Component, OnInit } from '@angular/core';
import { SerivesService } from '../serives.service';
//import {post} from '../data/post';


@Component({
  selector: 'app-depen1injenc',
  templateUrl: './depen1injenc.component.html',
  styleUrls: ['./depen1injenc.component.css']
})
export class Depen1injencComponent implements OnInit {
public employes=[];
Serivescreate:string;


title="DepencyInjenction Components";


  constructor(private dep1 : SerivesService) {
    this.title=dep1.Gethtml();
   }

  

  ngOnInit() {
    this.employes=this.dep1.getnews();
   
  }
  onclick(){
    this.Serivescreate=this.dep1.Gethtml();
  }
  // serivesbutton(){
  //   this.Serivescreate=this.dep1.Gethtml();
  // }

}
