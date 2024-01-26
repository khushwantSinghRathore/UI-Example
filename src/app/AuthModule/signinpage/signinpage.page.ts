import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.page.html',
  styleUrls: ['./signinpage.page.scss'],
})
export class SigninpagePage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  signUp() {
    this.route.navigateByUrl('/signuppage');
  }

  forgetPass() {
    this.route.navigateByUrl('/forgetpasspage');
  }
}
