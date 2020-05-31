import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-web-components',
  templateUrl: './web-components.component.html',
  styleUrls: ['./web-components.component.css']
})
export class WebComponentsComponent implements OnInit {

  constructor() { }
  @Input() shouldCountClicks = false;

  ngOnInit() {
  }

}
