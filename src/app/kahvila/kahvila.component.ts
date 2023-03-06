import { Component } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent {
  poydanNumero: string = '';
  myyntiMaara: string = '';

  kahviaMyyty() {
    // this.tarjoiluOhje.push({
    //   tyo: 'myyty',
    //   poydanNumero: this.poydanNumero,
    //   myyntiMaara: this.myyntiMaara
    // });
  }

  kahviaTarjoiltu() {
    // this.tarjoiluOhje.push({
    //   tyo: 'tarjoiltu',
    //   poydanNumero: this.poydanNumero,
    //   myyntiMaara: this.myyntiMaara
    // });
  }
}
