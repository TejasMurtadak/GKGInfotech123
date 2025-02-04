import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators}from'@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
submitForm() {
throw new Error('Method not implemented.');
}
contactForm:FormGroup;
isSubmitted: any;
formData: any;

constructor(private fb: FormBuilder) {
  this.contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{10,15}$')],
    ],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
}
onSubmit() {
  if (this.contactForm.valid) {
    console.log('Form Submitted', this.contactForm.value);
    // Add your form submission logic here
  }
}
}
