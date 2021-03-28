import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  resultado: number;

  constructor() {
    this.resultado = 0;
  }

  ngOnInit(): void {}

  onClick() {
    console.log('Hola mundo');
  }
}
