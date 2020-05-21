import { Component, OnInit,Input } from '@angular/core';
import{ users,role} from '../class/users';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  users:users;
  
  @Input()
  selrole:users;
  
  constructor() { }

  ngOnInit() {
  }

}
