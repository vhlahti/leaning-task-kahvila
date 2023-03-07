import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent {
  uusiPoydanNumero: string = '';
  uusiMyyntiMaara: string = '';
  
  @Output() myyntiTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();
  @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();

  kahviaMyyty() {
    this.myyntiTapahtuma.emit({
      poydanNumero: this.uusiPoydanNumero,
      myyntiMaara: this.uusiMyyntiMaara
    })
  }

  kahviaTarjoiltu() {
    this.tarjoiluTapahtuma.emit({
      poydanNumero: this.uusiPoydanNumero,
      myyntiMaara: this.uusiMyyntiMaara
    })
  }

}