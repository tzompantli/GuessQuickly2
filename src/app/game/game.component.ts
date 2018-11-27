import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user';
import { Entry } from '../entry/entry';
import { arEntries } from '../entry/etnries'
import { arUsers } from '../user/users'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  entries: Entry [];
  currentEntry: Entry;
  users: User [];
  User: User;

  constructor() { 

    this.entries = arEntries;
    this.users = arUsers;
    this.currentEntry = new Entry();
    this.currentEntry.strQuestion = "6 x 7"
    this.currentEntry.kAnswer = 42
  }

  private getRandomEntry() {
    
    let kEntriesLength:number;
    let kIndex:number;
    var tmpEntries: Entry [] = new Array();

    kEntriesLength = this.entries.length;

    kIndex = Math.floor(Math.random() * kEntriesLength)

    //Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);

    this.entries.forEach((entry, index)=>{
      if(index == kIndex) {
        
        this.currentEntry = entry;
      }
      else {
        tmpEntries.push(entry);
      }
    });

    this.entries = null;
    this.entries = tmpEntries;

    //this.currentEntry = this.entries[kIndex];
  }

  private getRandomMathEntry(mode:string = "mult") {

    let numA:number;
    let numB:number;

    numA = Math.floor(Math.random() * 100) + 1;
    numB = Math.floor(Math.random() * 100) + 1;

    if(mode == "mult") {

      this.currentEntry = new Entry();
      
      this.currentEntry.strQuestion = "Berechne " + numA + " x " + numB
      this.currentEntry.kAnswer = (numA * numB)
    }
    else if(mode == "add") {

      this.currentEntry = new Entry();
      
      this.currentEntry.strQuestion = "Berechne " + numA + " + " + numB
      this.currentEntry.kAnswer = (numA + numB)
    }
  }

  private onScoreChanged(score:number) {

    alert(score);
  }

  ngOnInit() { }
}
