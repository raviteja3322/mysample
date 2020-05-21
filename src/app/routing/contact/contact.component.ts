import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  selrole:any[];
  constructor() { }

  ngOnInit() {
  }
  users:any[]=[
    {id:1, name:'john',city:'delhi'},
    {id:2, name:'peter',city:'pune'},
    {id:3, name:'omed',city:'mumbai'}
  ]

  // onClick(id: any) : void {
  //   const user = this.users.find(users =>users.id ===id);
  //   this.selrole = user.role;
  // }
   
}
