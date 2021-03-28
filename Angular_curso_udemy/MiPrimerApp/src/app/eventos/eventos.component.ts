import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number = 0;

  constructor() {
    this.num1 = 17;
    this.num2 = 35;
  }

  ngOnInit(): void {}

  onClick() {
    this.resultado = this.num1 + this.num2;
  }
}
