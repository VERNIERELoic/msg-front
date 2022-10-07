import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/discord.json',
  };

  constructor() { }

  ngOnInit() {
  }

  array = ["image 1", "image 2", "image 3", "image 4"];

}