import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: [
      './top-nav-bar.component.scss',
      '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})

export class TopNavBarComponent implements OnInit {

  constructor(private router: Router) {
      this.router = router;
  }

  ngOnInit() {
  }

}
