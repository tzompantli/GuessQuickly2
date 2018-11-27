import { Component, OnInit, Input, Output } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.css']
})
export class GamesPanelComponent implements OnInit {

  @Input() games: Game[];
  @Output() selectedGame: Game;
  
  constructor() { }

  ngOnInit() {
  }

}
