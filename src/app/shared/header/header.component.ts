import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  currentUser: any;

  constructor(public authService: AuthService, public router: Router, public notificationService: NzNotificationService) {
    this.isLoggedIn = authService.isLoggedIn();
  }


  async ngOnInit() {
    this.currentUser = await firstValueFrom(this.authService.current())
    this.authService.currentUser.subscribe(user => {
      console.log(user);
    })
  }

  async logout() {
    this.authService.logout()
    this.router.navigate(['/']);
    this.notificationService.success("Succès", "Deconnecté");
  }

}