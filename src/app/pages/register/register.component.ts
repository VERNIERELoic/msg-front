import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }


  async register() {
    const user: any = await this.authService.addUser(this.validateForm.value)
      .toPromise()
      .then(() => {
        this.router.navigate(['/'])
      });
  }


  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  get firstname() {
    return this.validateForm.controls.firstname
  }

  get email() {
    return this.validateForm.controls.email
  }
  get password() {
    return this.validateForm.controls.password
  }
  get confirmPassword() {
    return this.validateForm.controls.confirmPassword
  }
  get phone() {
    return this.validateForm.controls.phone
  }

}
