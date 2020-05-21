import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-module1-component',
  templateUrl: './module1-component.component.html',
  styleUrls: ['./module1-component.component.css'],
  animations: [fadeAnimation]
  // animations: [
  //   trigger('myAnimation', [
  //     transition('* => *', [
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 })],
  //         { optional: true }
  //       ),
  //       query(
  //         ':leave',
  //          [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
  //         { optional: true }
  //       ),
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
  //         { optional: true }
  //       )
  //     ])
  //   ])]
})
export class Module1ComponentComponent implements OnInit {

  constructor() { 
    console.log("in module 1 compoents")
  }

  ngOnInit() {
  }

}
