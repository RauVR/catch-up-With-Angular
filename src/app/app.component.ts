import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //  Agregamos implements por que queremos q haga algo cuando comienza
  title = 'catchup'; //Renombramos el titulo a catchup
}
