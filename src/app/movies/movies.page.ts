import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { MyHttp } from '../services/my-http';
import { Router } from '@angular/router';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {

  keyword:string = "";
  apiKey="a24667b41cc03c35fa81cb81e7ec8d40"
  movieInfo!:any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/search/movie?query="
   
  }

  constructor(private router:Router, private ds:Data, private mds: Data, private mhs:MyHttp) { }

  ngOnInit() {
    this.getKW();
  }



  async getKW() {
    this.keyword = await this.ds.get('kw');
    this.options.url = this.options.url.concat(this.keyword + "&api_key=" + this.apiKey);
    //this.movieInfo = await this.mhs.get(this.options);
    let result = await this.mhs.get(this.options);
    this.movieInfo = result.data.results;
    console.log(JSON.stringify(this.movieInfo));
/*
    let result = await this.mhs.get(this.options);
    this.movieInfo = result.options.results;
    console.log(JSON.stringify(this.movieInfo));
    */
  }


  async openMovieDetails(movie:any) {
    await this.mds.set("movie", movie);
    console.log(movie)
    this.router.navigate(['./moviedetails']);
  }

}
