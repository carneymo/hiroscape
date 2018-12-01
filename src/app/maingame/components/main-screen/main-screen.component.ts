import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: [
      './main-screen.component.scss',
      '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})

export class MainScreenComponent implements OnInit {

  constructor(private router: Router) {
      this.router = router;
  }

  ngOnInit() {
  }

}
