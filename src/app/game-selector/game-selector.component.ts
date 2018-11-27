import { Component, OnInit, Input, Output } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {

  @Input() games: Game[];
  @Output() selectedGame: Game;
  
  constructor() { }

  ngOnInit() {
  }

}
