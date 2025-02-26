import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-career-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './career-dialog.component.html',
  styleUrl: './career-dialog.component.scss'
})
export class CareerDialogComponent {
  careerForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<CareerDialogComponent>
  ) {
    // Initialize Form
    this.careerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      company: [''],
      department: ['', Validators.required],
      resume: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    // if (this.contactForm.valid) {
      console.log('Form Data:', this.careerForm.value);
      alert('Form submitted successfully!');
      // Here you can send the form data to your backend API
    // } else {
    //   alert('Please fill all required fields!');
    // }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
