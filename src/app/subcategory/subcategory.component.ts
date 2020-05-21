import { Component, OnInit, Input } from '@angular/core';
import {AuthSerives} from '../auth.serive';
import {Router, ActivatedRoute} from '@angular/router';
import{ products,subcategory,product} from '../class/productlist';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  
  
  @Input()
  selProduct:products;
  
  constructor() { }

  ngOnInit() {
   
  }
  
}
