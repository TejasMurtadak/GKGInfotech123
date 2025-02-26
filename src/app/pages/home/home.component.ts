import { Component,ViewChild,TemplateRef,AfterViewInit ,Inject, PLATFORM_ID ,OnDestroy ,ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Router ,NavigationEnd } from '@angular/router';
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
import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter } from 'rxjs/operators';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor,MatButtonModule,MatButtonModule,],  // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('0.5s ease-in-out'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit,OnDestroy {
  // Array of tabs
  tabs = ['front-end', 'mobile-dev', 'web-dev', 'data-warehouse', 'cloud-platform'];

  // Default active tab
  selectedTab: string = 'front-end';

  constructor(private router: Router,private dialog: MatDialog,@Inject(PLATFORM_ID) private platformId: Object,private cdr: ChangeDetectorRef) {}


  // Action when the "Get Quote" button is clicked
  // onGetQuote() {
  //   this.router.navigate(['/contact-us']);  // Redirect to the Contact Us page
  // }

  // Change the selected tab and show the relevant tech cards
  showTechCards(category: string) {
    console.log(this.selectedTab +"Before")
    this.selectedTab = category;
    console.log(this.selectedTab+"after")
  }

  // Check if the tab is active
  isTabActive(tab: string): boolean {
    return this.selectedTab === tab;
  }
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
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;



  openModal(title: string): void {
    this.dialog.open(this.modalTemplate, {
      width: '80vw',
      height: '80vh',
      data: { title }
    });
  }
  openDialog(component:any) {

    if(component==="WebdevComponent"){
      //imort here
      const dialogRef = this.dialog.open(WebdevComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }



  }
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


  logos: string[] = [
    '/gkdukaan.png',
    '/gkmusic.png',
    '/gkdukaan.png',
    '/gkmusic.png',
    '/gkdukaan.png',
    '/gkdukaan.png',
    '/gkmusic.png',
    '/gkdukaan.png','/gkdukaan.png',
    '/gkdukaan.png',
    '/gkmusic.png',
    '/gkdukaan.png'
  ];

  cardStates = ['hidden', 'hidden', 'hidden', 'hidden']; // Initial state for each card
  private observer: IntersectionObserver | null = null;




  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollAnimation();

      // Reinitialize the observer when navigating back to the home component
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          // Reset card states and reinitialize the observer
          this.cardStates = ['hidden', 'hidden', 'hidden', 'hidden'];
          this.setupScrollAnimation();
        });
    }
  }

  ngOnDestroy() {
    // Clean up the observer when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupScrollAnimation() {
    const cardContainer = document.querySelector('.row'); // Observe the parent container
    if (!cardContainer) {
      console.error('Card container not found!');
      return;
    }

    // Disconnect the existing observer if it exists
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Section is in view. Animating cards...');
          this.cardStates = this.cardStates.map(() => 'visible');
          this.cdr.detectChanges(); // Manually trigger change detection
        } else {
          console.log('Section is out of view. Resetting cards...');
          this.cardStates = this.cardStates.map(() => 'hidden');
          this.cdr.detectChanges(); // Manually trigger change detection
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the container is visible

    console.log('Observing card container...');
    this.observer.observe(cardContainer);
  }

}
