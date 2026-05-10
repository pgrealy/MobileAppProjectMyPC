import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonButton, IonCardTitle, IonCardHeader, IonCard, IonLabel } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { Router } from '@angular/router';
import { HttpOptions } from '@capacitor/core';
import { MyHttp } from '../services/my-http';

@Component({
  selector: 'app-moviecredits',
  templateUrl: './moviecredits.page.html',
  styleUrls: ['./moviecredits.page.scss'],
  standalone: true,
  imports: [IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonButton, IonCardTitle, IonCardHeader, IonCard]
})
export class MoviecreditsPage implements OnInit {

  apiKey="a24667b41cc03c35fa81cb81e7ec8d40"
  movieDetails: any = {
    original_title: ""
  };
  movieCredits: any = {
    original_name: ""
  };
  movieAttrs: any = [];
  movieId: any = "";
  options: HttpOptions = {
    url: "https://image.tmdb.org/t/p/original/"
  }

  optionsCredits: HttpOptions = {
    url: "https://api.themoviedb.org/3/movie/"
  }



  constructor(private router:Router, private mds:Data, private mhs:MyHttp) {
    console.log("MoviecreditsPage constructor()")
   }

  ngOnInit() {
    console.log("MoviecreditsPage ngOnInit()")
    this.getMovieCreditsFromStorage();
  }


  /*  method to get more detail for the selected movie details from storage */

  async getMovieCreditsFromStorage() {
    this.movieDetails = await this.mds.get("movie");
    this.movieId = this.movieDetails.id;
    
    this.optionsCredits.url = this.optionsCredits.url.concat(this.movieDetails.id + "/credits?api_key=" + this.apiKey);
    let result = await this.mhs.get(this.optionsCredits);
    this.movieCredits = result.data.cast;

   
    /* console.log(JSON.stringify(this.optionsCredits.url)); */
    console.log(JSON.stringify(this.movieCredits));
    console.log(JSON.stringify(this.movieId));
    
  
    for(const attr in this.movieCredits) {
      this.movieAttrs.push(attr);
    }
    console.log(JSON.stringify(this.movieAttrs));
  }


  /* Method to route to the home page */

  homePage() {
    this.router.navigate(['/home']);

  }

    /* ionic lifecycle hooks */  
  ionViewWillEnter() { 
    console.log("MoviecreditsPage ionViewWillEnter()") 
  } 
  ionViewDidEnter() { 
    console.log("MoviecreditsPage ionViewDidEnter()") 
  } 
  ionViewWillLeave() { 
    console.log("MoviecreditsPage ionViewWillLeave()") 
  } 
  ionViewDidLeave() { 
    console.log("MoviecreditsPage ionViewDidLeave()") 
  } 
  ngOnDestroy() { 
    console.log("MoviecreditsPage ngOnDestroy()") 
  }

}