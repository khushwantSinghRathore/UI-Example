import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpasspage',
  templateUrl: './forgetpasspage.page.html',
  styleUrls: ['./forgetpasspage.page.scss'],
})
export class ForgetpasspagePage implements OnInit {
  white = '#D6DFFF';
  blue = '#5D81FD';
  constructor(private route: Router) {}

  ngOnInit() {}

  back() {
    this.route.navigateByUrl('/signinpage');
  }

  contine() {
    this.route.navigateByUrl('/optvrfypage');
  }
}
