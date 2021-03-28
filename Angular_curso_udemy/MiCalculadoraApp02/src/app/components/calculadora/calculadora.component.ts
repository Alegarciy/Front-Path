import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  result: string;

  constructor() {
    this.result = '';
  }

  ngOnInit(): void {}

  onClick($event) {
    this.result += $event.target.innerText;
  }

  onResultado() {
    this.result = eval(this.result);
  }
}
