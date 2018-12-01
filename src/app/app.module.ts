import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaingameComponent } from './maingame/maingame.component';
import { MenuComponent } from './menu/menu.component';
import { TopNavBarComponent } from './maingame/components/top-nav-bar/top-nav-bar.component';
import { MainScreenComponent } from './maingame/components/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MaingameComponent,
    MenuComponent,
    TopNavBarComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
