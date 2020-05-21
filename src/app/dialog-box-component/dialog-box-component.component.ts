import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-box-component',
  templateUrl: './dialog-box-component.component.html',
  styleUrls: ['./dialog-box-component.component.css']
})
export class DialogBoxComponentComponent {

 
  
  constructor(public dialogRef: MatDialogRef <DialogBoxComponentComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
