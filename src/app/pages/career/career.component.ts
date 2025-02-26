import { Component } from '@angular/core';
import { CareerDialogComponent } from '../../popup/career-dialog/career-dialog.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatButtonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

  constructor(private router: Router,private dialog: MatDialog) {}

  isPopupOpen: boolean = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    budget: '',
    message: '',
  };
 

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    this.closePopup();
  }

  openDialog1(): void {
      this.dialog.open(CareerDialogComponent, {
        width: '500px',
        panelClass: 'custom-dialog-container'
      });
    }
}
