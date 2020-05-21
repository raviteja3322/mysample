import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'app-module3-component',
  templateUrl: './module3-component.component.html',
  styleUrls: ['./module3-component.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class Module3ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
