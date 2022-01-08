import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluador',
  templateUrl: './evaluador.component.html',
  styleUrls: ['./evaluador.component.scss', '../../../assets/scss/global.scss']
})
export class EvaluadorComponent implements OnInit {
  contadorItems = 1;
  items = [1];
  constructor() { }

  ngOnInit(): void {
  }

  agregarItem() {
    this.contadorItems += 1;
    this.items.push(this.contadorItems);
  }

  eliminarItem(idx: number) {
    this.contadorItems -= 1;
    this.items.splice(idx, 1);
  }

}
