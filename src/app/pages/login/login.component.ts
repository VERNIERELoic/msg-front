import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private notificationService: NzNotificationService) { }

  async login() {
    await this.authService.login(this.validateForm.value)
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
        this.notificationService.success("Succès", "Connecté");
      }).catch(() => {
        this.notificationService.error("Erreur", "Les identifiants ne sont pas reconnus");
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
