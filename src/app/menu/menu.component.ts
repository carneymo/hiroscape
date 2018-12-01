import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public startNew() {
      console.log('New Game Started!');
      this.clearMainMenu();
  }

  private clearMainMenu() {
      $('#mainmenu-container > div').stop().animate({
          opacity: '0'
      }, 1000, function() {
          console.log('Ready to start game');
          $('#maingame').removeClass('d-none');
      });
      console.log('clear main menu called');
  }
}
