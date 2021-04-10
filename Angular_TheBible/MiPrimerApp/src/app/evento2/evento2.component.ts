import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evento2',
  templateUrl: './evento2.component.html',
  styleUrls: ['./evento2.component.css'],
})
export class Evento2Component implements OnInit {
  tiempo: number;
  @Input() tiempoInicial: number;
  @Output() alertaNumeroInicial = new EventEmitter<string>();

  constructor() {
    this.tiempoInicial = 10;
  }

  ngOnInit(): void {
    this.tiempo = this.tiempoInicial;
  }

  onClick(): void {
    console.log('hola mundo');
    let interval = setInterval(() => {
      this.tiempo--;
      if (this.tiempo === 0) {
        this.alertaNumeroInicial.emit(
          'El timer con valor: ' + this.tiempoInicial + ' a terminado'
        );
        this.tiempo = this.tiempoInicial;
        clearInterval(interval);
      }
    }, 1000);
  }
}
