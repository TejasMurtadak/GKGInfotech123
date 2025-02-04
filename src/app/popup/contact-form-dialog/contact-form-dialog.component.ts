import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact-form-dialog.component.html',
  styleUrl: './contact-form-dialog.component.scss'
})
export class ContactFormDialogComponent {
 
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ContactFormDialogComponent>
  ) {
    // Initialize Form
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      department: ['', Validators.required],
      budget: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Form submitted successfully!');
      // Here you can send the form data to your backend API
    } else {
      alert('Please fill all required fields!');
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
