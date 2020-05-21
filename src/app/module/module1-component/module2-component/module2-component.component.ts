import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-module2-component',
  templateUrl: './module2-component.component.html',
  styleUrls: ['./module2-component.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class Module2ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
