import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviedetailsPage implements OnInit {

  movieDetails: any = {
    original_title: ""
  };
  movieAttrs: any = [];

  constructor(private router:Router, private mds:Data) { }

  ngOnInit() {
    this.getMovieDetailsFromStorage();
  }

  async getMovieDetailsFromStorage() {
    this.movieDetails = await this.mds.get("movie");
    for(const attr in this.movieDetails.overview) {
      this.movieAttrs.push(attr);
    }
    console.log(JSON.stringify(this.movieAttrs.overview));
  }

  homePage() {
    this.router.navigate(['/home']);

  }

}
