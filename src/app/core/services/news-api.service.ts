import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apikey='a39a7407bfc7482baaa2c9f1939fe391'; //Creamos esto

  constructor(private http: HttpClient) { //Editamos esto
  }

  initArticles(){  //Creamos esto
    return this.getArticlesBySourceId('bbc-news');
  }

  getSources(){  //Creamos esto
    return this.http.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${this.apikey}`)
  }

  getArticlesBySourceId(sourceId: string){  //Creamos esto
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${this.apikey}`)
  }
}
