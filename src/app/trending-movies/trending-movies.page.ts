/* Coding taken and adapted from examples from class lectures */


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.page.html',
  styleUrls: ['./trending-movies.page.scss'],
  standalone: true,
 imports: [IonCardHeader, IonCard, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TrendingMoviesPage implements OnInit {

  keyword:string = "";
  apiKey="a24667b41cc03c35fa81cb81e7ec8d40"
  trendingMovieInfo!:any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey
   
  }

  constructor(private router:Router, private ds:Data, private mds: Data, private mhs:MyHttp) {
    console.log("TrendingMoviesPage constructor()")
   }

  ngOnInit() {
    console.log("TrendingMoviesPage ngOnInit()")
    this.getKW();
  }


  /* method based on blank input to launch trending movies */

  async getKW() {
    let result = await this.mhs.get(this.options);
    this.trendingMovieInfo = result.data.results;
    console.log(JSON.stringify(this.trendingMovieInfo));
  }

  async openTrendingMovieDetails(trendingMovie:any) {
    await this.mds.set("trendingMovie", trendingMovie);
    console.log(trendingMovie)
    this.router.navigate(['./moviedetails']);
  }

/* ionic lifecycle hooks */  
  ionViewWillEnter() { 
    console.log("TrendingMoviesPage ionViewWillEnter()") 
  } 
  ionViewDidEnter() { 
    console.log("TrendingMoviesPage ionViewDidEnter()") 
  } 
  ionViewWillLeave() { 
    console.log("TrendingMoviesPage ionViewWillLeave()") 
  } 
  ionViewDidLeave() { 
    console.log("TrendingMoviesPage ionViewDidLeave()") 
  } 
  ngOnDestroy() { 
    console.log("TrendingMoviesPage ngOnDestroy()") 
  } 

}