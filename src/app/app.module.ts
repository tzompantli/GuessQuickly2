import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { UserComponent } from './user/user.component';
import { GameComponent } from './game/game.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { GamesPanelComponent } from './games-panel/games-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    UserComponent,
    GameComponent,
    WelcomeComponent,
    GameSelectorComponent,
    GameCreatorComponent,
    GamesPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
