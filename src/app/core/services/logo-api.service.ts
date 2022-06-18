import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {

  baseUrl='https://logo.clearbit.com/'  // Agregamoso esto

  constructor() { }

  getUrlToLogo(source: any){  // Creamos esto
    return`${this.baseUrl}${new URL(source.url).host}`;
  }

}
