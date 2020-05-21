import { Component, OnInit } from '@angular/core';
import { SerivesService } from '../serives.service';

@Component({
  selector: 'app-depen2injenc',
  templateUrl: './depen2injenc.component.html',
  styleUrls: ['./depen2injenc.component.css']
})
export class Depen2injencComponent implements OnInit {
public employe=[];

  constructor(private emp: SerivesService,private _observ : SerivesService) {}

  ngOnInit() {
    this.employe = this.emp.getnews();
  }

  

}
