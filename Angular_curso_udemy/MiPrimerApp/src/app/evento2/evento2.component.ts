import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento2',
  templateUrl: './evento2.component.html',
  styleUrls: ['./evento2.component.css'],
})
export class Evento2Component implements OnInit {
  tiempo: number;

  constructor() {
    this.tiempo = 10;
  }

  ngOnInit(): void {}

  onClick(): void {
    let interval = setInterval(() => {
      this.tiempo--;
      if (this.tiempo === 0) clearInterval(interval);
    }, 1000);
  }
}
