import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpasspage',
  templateUrl: './resetpasspage.page.html',
  styleUrls: ['./resetpasspage.page.scss'],
})
export class ResetpasspagePage implements OnInit {
  white = '#D6DFFF';
  blue = '#5D81FD';
  constructor(private route: Router) {}

  ngOnInit() {}

  back() {
    this.route.navigateByUrl('/forgetpasspage');
  }

  submit() {
    this.route.navigateByUrl('/home');
  }
}
