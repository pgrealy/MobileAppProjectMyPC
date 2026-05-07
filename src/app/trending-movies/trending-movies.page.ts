import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.page.html',
  styleUrls: ['./trending-movies.page.scss'],
  standalone: true,
 imports: [IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TrendingMoviesPage implements OnInit {

  keyword:string = "";
  apiKey="a24667b41cc03c35fa81cb81e7ec8d40"
  trendingMovieInfo!:any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey
   
  }

  constructor(private ds:Data, private mhs:MyHttp) { }

  ngOnInit() {
    this.getKW();
  }

  async getKW() {
    let result = await this.mhs.get(this.options);
    this.trendingMovieInfo = result.data.results;
    console.log(JSON.stringify(this.trendingMovieInfo));


  }
  //  this.keyword = await this.ds.get('kw');
 //  this.options.url = this.options.url.concat(this.keyword);
   // let result = this.options.url;
    //this.movieInfo = result.data.results;
    //console.log(JSON.stringify(this.movieInfo));
  //}

}