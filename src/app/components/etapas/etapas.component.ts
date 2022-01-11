import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.scss', '../../../assets/scss/global.scss']
})
export class EtapasComponent implements OnInit {

  constructor() { }
  evaluadorEtapaUno = false;
  evaluadorEtapaDos = false;
  etapaDos = false;
  urlContador = 1;
  urlPrueba = [1] ;
  finalizarProceso = true;

  ngOnInit(): void {
  }

  addUrlPrueba() {
    this.urlContador += 1;
    this.urlPrueba.push(this.urlContador);
  }

  removeUrlPrueba(idx: number) {
    this.urlPrueba.splice(idx, 1);
  }

  agregarEvaluadorEtapaUno() {
    this.evaluadorEtapaUno = true;
  }

  eliminarEvaluadorEtapaUno() {
    this.evaluadorEtapaUno = false;
  }

  agregarEtapa() {
    this.etapaDos = true;
  }

  eliminarEtapaDos() {
    this.etapaDos = false;
  }

  agregarEvaluadorEtapaDos() {
    this.evaluadorEtapaDos = true;
  }

  eliminarEvaluadorEtapaDos() {
    this.evaluadorEtapaDos = false;
  }

  finalizarProcesoEvent() {
    this.finalizarProceso = true;
  }
  finalizarProcesoCancelar() {
    this.finalizarProceso = false;
  }

}
