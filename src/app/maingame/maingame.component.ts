import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maingame',
  templateUrl: './maingame.component.html',
  styleUrls: [
      './maingame.component.scss',
      '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})

export class MaingameComponent implements OnInit {

  constructor(private router: Router) {
      this.router = router;
  }

  ngOnInit() {
  }

}
