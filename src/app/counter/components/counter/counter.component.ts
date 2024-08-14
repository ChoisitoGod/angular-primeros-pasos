import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3> Counter: {{counter}} </h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="resetCounter()"> Reset </button>
  <button (click)="increaseBy2()">-1</button>

  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy():void {
    this.counter +=1
  }

  increaseBy2():void {
    this.counter -=1
  }

  resetCounter():void {
    this.counter = 10;
  }


}
