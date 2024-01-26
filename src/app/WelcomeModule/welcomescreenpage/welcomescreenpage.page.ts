import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomescreenpage',
  templateUrl: './welcomescreenpage.page.html',
  styleUrls: ['./welcomescreenpage.page.scss'],
})
export class WelcomescreenpagePage implements OnInit {
  blue = '#5D81FD';
  white = '#D6DFFF';
  active: number = 1;
  constructor(private router: Router) {}

  ngOnInit() {}

  next() {
    this.active = 2;
  }

  toApp() {
    this.router.navigateByUrl('/signuppage');
  }
}
