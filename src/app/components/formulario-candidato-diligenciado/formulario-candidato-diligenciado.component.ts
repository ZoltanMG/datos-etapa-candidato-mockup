import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-candidato-diligenciado',
  templateUrl: './formulario-candidato-diligenciado.component.html',
  styleUrls: ['./formulario-candidato-diligenciado.component.scss']
})
export class FormularioCandidatoDiligenciadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cargo = 'otro';

}
