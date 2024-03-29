import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optvrfypage',
  templateUrl: './optvrfypage.page.html',
  styleUrls: ['./optvrfypage.page.scss'],
})
export class OptvrfypagePage implements OnInit {
  white = '#D6DFFF';
  blue = '#5D81FD';
  constructor(private route: Router) {}

  ngOnInit() {}

  back() {
    this.route.navigateByUrl('/forgetpasspage');
  }

  reset() {
    this.route.navigateByUrl('/resetpasspage');
  }
}
