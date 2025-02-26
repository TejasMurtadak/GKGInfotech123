import { Component,ViewChild,TemplateRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button';
import { WebdevComponent } from '../../popup/webdev/webdev.component';
import { ContactFormDialogComponent } from '../../popup/contact-form-dialog/contact-form-dialog.component';
import { GaraphicDailogComponent } from '../../popup/garaphic-dailog/garaphic-dailog.component';
import { DigitalDialogComponent } from '../../popup/digital-dialog/digital-dialog.component';
import { SeoDialogComponent } from '../../popup/seo-dialog/seo-dialog.component';
import { WebsiteDialogComponent } from '../../popup/website-dialog/website-dialog.component';
import { MobdevDialogComponent } from '../../popup/mobdev-dialog/mobdev-dialog.component';
import { EcommerceDialogComponent } from '../../popup/ecommerce-dialog/ecommerce-dialog.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private router: Router,private dialog: MatDialog) {}

  openDialog1(): void {
    this.dialog.open(ContactFormDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }

  openDialog2(): void {
    this.dialog.open(WebdevComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container'
    });
  }

  openDialog3(): void {
    this.dialog.open(GaraphicDailogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }

  openDialog4():void{
    this.dialog.open(DigitalDialogComponent, {
    width:'500px',
    panelClass:'custom-dialog-container'
    });
  }
  openDialog5():void{
    this.dialog.open(SeoDialogComponent,{
      width:'500px',
      panelClass:'custom-dialog-container'
    })

  }
  openDialog6():void{
    this.dialog.open(WebsiteDialogComponent,{
      width:'500px',
      panelClass:'custom-dialog-container'
    })
  }
  openDialog7():void{
    this.dialog.open(MobdevDialogComponent,{
      width:'500px',
      panelClass:'custom-dialog-container'
      })
  }
  openDialog8():void{
  this.dialog.open(EcommerceDialogComponent,{
    width:'500px',
    panelClass:'custom-dialog-container'
    })
  }

}
