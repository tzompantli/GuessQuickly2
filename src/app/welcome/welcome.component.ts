import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../user/user';
import { Game } from '../game/game';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() title: string;
  users: User [];
  games: Game [];
  bCreateGame: Boolean;
  strErrMsg: String;
  
  constructor() { }

  ngOnInit() {

    this.bCreateGame = false;
    this.users = new Array();

  }

  private selectOrCreateGame(bCreateGame: Boolean) {
  
    if(bCreateGame) {
      
      //start new game
      this.bCreateGame = true;
    }
    else {

      //select from existing games
      this.bCreateGame = false;
    }

    alert(this.bCreateGame)
  }
  
  private addUser(name:string, game: number) {

    let newUser: User;
    newUser = new User();
    newUser.kId = this.users.length;
    newUser.kScore = 0;
    newUser.strName = name;
    this.games[game].users.push(newUser);
  }

  private initGame() {

    let newGame: Game;
    newGame = new Game();
    newGame.id = this.games.length;
    this.games.push(newGame);
  }

  private startGame() {

  }

  private finishGame(game: Game) {
    
  }

}
