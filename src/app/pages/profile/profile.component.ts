import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  validateForm!: FormGroup;
  currentUser: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }


  async ngOnInit() {

    this.currentUser = await firstValueFrom(this.authService.current())
    this.authService.currentUser.subscribe(user => {
      console.log(user);
    });

    this.validateForm = this.fb.group({
      email: [this.currentUser.email],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [this.currentUser.name],
      phone: [this.currentUser.phone],
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
}
