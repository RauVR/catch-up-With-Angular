import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  title= 'catch-up';   //Agregamos esto
  @Input()articles:Array<any>=[];   //  Esto indica que este atributo es un property del componente

  constructor() {}
}
