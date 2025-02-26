import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';
@Component({
  selector: 'app-digital-dialog',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule,
    MatExpansionModule, MatButtonModule],
  templateUrl: './digital-dialog.component.html',
  styleUrl: './digital-dialog.component.scss'
})
export class DigitalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactFormDialogComponent>,private dialog: MatDialog
  ){}
  closeDialog(): void {
    this.dialogRef.close();
  }
  openDialog1(): void {
    this.dialog.open(ContactFormDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }

}
