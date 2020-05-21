import { Component, OnInit } from '@angular/core';
import { SerivesService } from '../serives.service';
//import {post} from '../data/post';
import { comment } from '../data/comment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  name: string;
 

  public searchText: string='';
  
 
  public employedetails;
  //public employedetails1; public searchText1:string='';
  // selected_count: number = 0;
  // selected_games=[];
  
    constructor(private dep1 : SerivesService, private _observ : SerivesService) {
      this._observ.getemploye()
        .subscribe(
          resp => 
          {
            this.employedetails=resp
            //this.employedetails1=JSON.parse(JSON.stringify(resp));
          }
      );
    }


  getSelected() {
    this.employedetails.filter();
  }



    games = [
      {name: 'Chess',id: 1,selected: false},
      {name: 'Ludo',id: 2,selected: false},
      {name: 'Snakes & Ladders',id: 3,selected: false},
      {name: 'Carrom',id: 4,selected: false},
      {name: 'Scrabble',id: 5,selected: false},
      {name: 'Monopoly',id: 6,selected: false},
      {name: 'Uno',id: 7,selected: false}
    ]

    


// getfilter(){
//   this.selected_games=this.games.filter(g=>{
//     return g.selected
//   })
//   this.selected_count=this.selected_games.length;

// }

// cleargame(){
//   this.selected_games=[];
// }

ngOnInit() {
}

}
