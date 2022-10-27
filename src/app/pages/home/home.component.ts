import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ["./assets/images/indoor.png", "./assets/images/outdoor.png"];

  team = [
    ["Yass", "./assets/images/barberprofile.jpg", "description "],
    ["Unknow", "./assets/images/barberprofile.jpg", "Desciption"],
    ["Unknow", "./assets/images/barberprofile.jpg", "description"],
  ];

  likes = 0;
  dislikes = 0;

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}

