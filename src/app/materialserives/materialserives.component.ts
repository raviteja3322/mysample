import { Component, OnInit } from '@angular/core';
import {MySerivesService} from '../serives/my-serives.service';
import { Comments } from '../data/comment';
import {postsjson} from '../data/post';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-materialserives',
  templateUrl: './materialserives.component.html',
  styleUrls: ['./materialserives.component.css']
})
export class MaterialserivesComponent implements OnInit {

  public getemployees1:Comments[];
  public albumdetails = [];
  constructor(private route: ActivatedRoute,private  serives:MySerivesService) { }

  ngOnInit() {
    this.serives.getemployees1()
    .subscribe
    (
        (data) => 
        {
          this.getemployees1 = data
        }
    );

    this.serives.getData().subscribe((data) => {
      this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.albumdetails);
   });

  }

}
