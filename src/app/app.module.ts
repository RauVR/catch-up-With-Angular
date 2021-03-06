import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {NewsApiService} from "./core/services/news-api.service";
import {LogoApiService} from "./core/services/logo-api.service";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainContentComponent } from './main-content/main-content.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterContentComponent } from './footer-content/footer-content.component';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainContentComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, //   Agregamos esto

    //Haciendo referencia a los componentes de Angular Material
    //que se van a utilizar : ----
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatGridListModule  // --- Listo.

  ],
  providers: [NewsApiService,LogoApiService], //Aqui van las clases que vas a hacer servicios que se...
  bootstrap: [AppComponent]                   //...se encuentren disponibles para otros
})
export class AppModule { }
