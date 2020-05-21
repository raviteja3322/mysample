import { Component, OnInit,ViewChild, Input } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { MainSerivesService } from '../main-serives.service';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DialogBoxComponentComponent } from 'src/app/dialog-box-component/dialog-box-component.component';


@Component({
  selector: 'app-prouduct-list',
  templateUrl: './prouduct-list.component.html',
  styleUrls: ['./prouduct-list.component.css']
})

export class ProuductListComponent implements OnInit {

  public products:any=[];
  public id:number;
  public getdetails;
  
  @Input() element: any;
  
  //public getRegisterdetails=[];
 
  displayedColumns: string[] = ['ID','Productname', 'ProductDescription', 'ProduCategory','getdetails'];


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  selected: any;
 
  
  constructor(public dialog: MatDialog,private rout:Router,private router:ActivatedRoute, private http:HttpClient,private serives: MainSerivesService) {

   
    const data = this.router.snapshot.data['getproduct'];
    //this.products=data.products;
    this.products = new MatTableDataSource(data.products);
    
    
   
  }


  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  openDialog(event, data): void {
   
  
    this.dialog.open(DialogBoxComponentComponent,{
      data: data,
      width: '600px',
    });

  }

  // getData=function () {
  //   this.http.get("http://localhost:4300/production")
  //     .subscribe(
  //       (res:Response)=>{
  //         this.products = res;  
  //   })
  // }
  
  ngOnInit() {
    //this.getData();
    this.products.sort=this.sort;
    this.products.paginator=this.paginator;
  }

  getRecord(productname)
  {
    alert("productname" +  productname);
  }


  deleteproduct=function(id){
    if(confirm("Are you Sure Want To Delete")) {
      const url=`${"http://localhost:4300/production/"}/${id}`;
      return this.http.delete(url,{headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      })
    }
  }

  
  // public ViewButtonClick(id:number){
  //   this.registerview.ViewButtonClick(id);
  // }

  backbtn(){
    this.rout.navigate(['/ProductCreate']);
  }

}