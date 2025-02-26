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
  contactForm: FormGroup;
  resumeFile: File | null = null;


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      resume: [null, [Validators.required, this.fileTypeValidator]]

    });
  }
  // Custom validator for file type
  fileTypeValidator(control: any) {
    const file = control.value;
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        return { fileType: true };
      }
    }
    return null;
  }

  // Handle file input change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeFile = file;
      this.contactForm.get('resume')?.setValue(file);
    }
  }

  // Reset the form
  resetForm() {
    this.contactForm.reset();
    this.resumeFile = null; // Clear the file reference
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('firstName', this.contactForm.get('firstName')?.value);
      formData.append('lastName', this.contactForm.get('lastName')?.value);
      formData.append('email', this.contactForm.get('email')?.value);
      formData.append('phone', this.contactForm.get('phone')?.value);
      formData.append('message', this.contactForm.get('message')?.value);
      if (this.resumeFile) {
        formData.append('resume', this.resumeFile, this.resumeFile.name);
      }

      // Submit the form data (e.g., send to an API)
      console.log('Form Data:', formData);

      // Show success message
      alert('Your form has been successfully sent!');

      // Clear the form
      this.resetForm();
    }
  }
}
