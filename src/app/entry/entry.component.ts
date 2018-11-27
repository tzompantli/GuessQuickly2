import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../user/user'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnChanges {

  @Input() entry : Entry;
  @Output() changeScoreEvent : EventEmitter<number>;
  score: number;
  percentage: number;
  clock: Observable<number>;
  timeRemainingSub: Subscription;
  timeRemaining: number;
  errMsg: string;
  user: User;
  
  constructor() { 
    this.changeScoreEvent = new EventEmitter<number>();
  }

  ngOnChanges() {

    this.unlockUi();
    this.score = 0;
    this.percentage = 0;
    this.errMsg = "";
    this.clock = this.countDown(7,1000);
    this.timeRemainingSub = this.clock.subscribe((value)=>{
      this.timeRemaining = value;
    });
  }

  private countDown (kCountFrom:number, kInterval:number=1000) {

    let i:number = kCountFrom;
    this.timeRemaining = kCountFrom;

    var clock = Observable.create((observer)=>{
      
      var interval = setInterval(()=>{

        i -= 1;
        observer.next(i);
        if(i==0) {
          
          //weitere Eingaben blockieren
          this.lockUi();

          clearInterval(interval);
          if(this.timeRemainingSub != null) {
            this.timeRemainingSub.unsubscribe();
          }
        }
      }, kInterval)
    })
    
    return clock;
  }
  
  private unlockUi() {
    //alert("UI entsperrt");
  }
  
  private lockUi() {
    //alert("UI gesperrt");
  }

  private sendGuess(guess:string) {

    //weitere Eingaben blockieren
    this.lockUi();
    
    if(this.timeRemainingSub != null) {
      this.timeRemainingSub.unsubscribe();
    }
    
    let kGuess:number;
    kGuess = parseInt(guess);

    if(!isNaN(kGuess)) {
      this.evaluateGuess(kGuess);
    }
    else {
      this.errMsg =  "Fehler: Bitte Ganzahl eingeben."
      this.evaluateGuess(0);
    }
  }
  
  private evaluateGuess(guess:number) {

    let kAnswer:number;
    let kPercentage:number;

    kAnswer = this.entry.kAnswer;
    
    kPercentage = this.calcPercentage(guess, kAnswer);
    this.percentage = kPercentage;
    this.calcScore(kPercentage);

    this.changeScoreEvent.emit(this.score);
  }
  
  private calcPercentage(dblActual:number, dblHit:number) {

    let kPercentage:number;
    
    if(dblHit != 0) {
      
      kPercentage = Math.round((dblActual/dblHit)*100);

      if (kPercentage > 100) {

        kPercentage = kPercentage - 100
        kPercentage = 100 - kPercentage
      }
      return kPercentage;
    }
    else {
      if(dblActual==0) {
        return 100;
      }
      else {
        return 0;
      } 
    }
  }

  private calcScore(dblPercentage:number) {
    
    if(dblPercentage == 100) {

      this.score = 100;
    }
    else  if(dblPercentage < 100 && dblPercentage >= 80) {
      
      this.score = 50;
    }
    else  if(dblPercentage < 80 && dblPercentage >= 60) {
      
      this.score = 25;
    }
    else  if(dblPercentage < 60 && dblPercentage >= 50) {
      
      this.score = 10;
    }
    else {

      this.score = 0;
    }
  }
}
