import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Add-Num';
  numA: number;
  numB: number;
  sum: any;
  correctAnswer = false;
  congratsMessage = false;
  startTime: number;
  timerInterval: any;
  timeElapsed: any;
  newTime:any;
  constructor() {}

  ngOnInit() {
    this.generateRandom();
    this.startTimer();
  }
  generateRandom() {
    this.numA = Math.floor(Math.random() * 10);
    this.numB = Math.floor(Math.random() * 10);
  }
  submit() {
    if (this.sum == this.numA + this.numB) {
      this.correctAnswer = false;
      this.congratsMessage = true;
      this.generateRandom();
      clearInterval(this.timerInterval);
      this.sum=''
      if(this.congratsMessage){
        this.startTimer();}
    } else {     
      this.correctAnswer = true;
      this.congratsMessage = false;
    }
    this.newTime=this.timeElapsed;
  }
  startTimer(): void {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => this.calculateTime(), 1000);
  }

  calculateTime(): void {
    const currentTime = Date.now();
    const elapsedTimeInSeconds = Math.floor(
      (currentTime - this.startTime) / 1000
    );
    let elapsedTime: string;
    if (elapsedTimeInSeconds < 60) {
      elapsedTime = `${elapsedTimeInSeconds} seconds`;
    } else {
      const minutes = Math.floor(elapsedTimeInSeconds / 60);
      const seconds = elapsedTimeInSeconds % 60;
      elapsedTime = `${minutes} minutes and ${seconds} seconds`;
    }
    this.timeElapsed = elapsedTime;
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}
