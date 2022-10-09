import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  currentUser: any;

  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
    this.currentUser = authService.currentUser;
  }

  ngOnInit(): void {
  }
}