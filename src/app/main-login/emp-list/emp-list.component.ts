import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator'
import { DialogBoxComponentComponent } from 'src/app/dialog-box-component/dialog-box-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
public products:any=[];

@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

displayedColumns: string[] = ['id','username', 'email', 'companyname','Details'];

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.products.filter = filterValue.trim().toLowerCase();
}

  constructor(public dialog: MatDialog,private rout:Router,private http:HttpClient,private router:ActivatedRoute) {
    //this.products=this.router.snapshot.data['getemplist'];

    const data = this.router.snapshot.data['getemplist'];
    //this.products=data.details;
    this.products = new MatTableDataSource(data.details);

    
    
  }
  openDialog(event, data): void {
   
  
    this.dialog.open(DialogBoxComponentComponent,{
      data: data,
      width: '600px',
    });

  }

// getData=function () {
//   this.http.get("http://localhost:1233/employe")
//     .subscribe(
//       (res:any)=>{
//         this.products = res;  
//   })
// }



ngOnInit() {
  //this.getData();
  this.products.sort=this.sort;
  this.products.paginator=this.paginator;
}


}
