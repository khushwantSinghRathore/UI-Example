import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.page.html',
  styleUrls: ['./signuppage.page.scss'],
})
export class SignuppagePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signIn() {
    this.router.navigateByUrl('/signinpage');
  }
}
