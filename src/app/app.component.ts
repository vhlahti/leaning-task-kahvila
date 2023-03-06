import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarjoiluOhje: {tyo: string, poydanNumero: string, myyntiMaara: string}[] = [];
  tyo: string = '';
  poydanNumero: string = '';
  myyntiMaara: string = '';
  faCoffee = faCoffee;

  kahviaMyyty() {
    this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    });
  }

  kahviaTarjoiltu() {
    this.tarjoiluOhje.push({
      tyo: 'tarjoiltu',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    });
  }
}