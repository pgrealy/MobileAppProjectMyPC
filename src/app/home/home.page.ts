/* Coding taken and adapted from examples from class lectures */


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonInput, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, FormsModule, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  /* variables */
  keyword:string = "";
  
  constructor(private router:Router, private ds:Data) {
    console.log("HomePage constructor()")
  } 
  
  ngOnInit() {
    console.log("HomePage ngOnInit()")
  }

  /* method that uses the user's input to route to a list of movies based on keyword ot to trending movies */
  async openMovies() {
    await this.ds.set("kw", this.keyword);

    /* branch based on user's input */
    if(this.keyword == "") {
      this.router.navigate(['/trending-movies']);
    }
    else {
      this.router.navigate(['/movies']);
    }
  }

  /* ionic lifecycle hooks */  
  ionViewWillEnter() { 
    console.log("HomePage ionViewWillEnter()") 
  } 
  ionViewDidEnter() { 
    console.log("HomePage ionViewDidEnter()") 
  } 
  ionViewWillLeave() { 
    console.log("HomePage ionViewWillLeave()") 
  } 
  ionViewDidLeave() { 
    console.log("HomePage ionViewDidLeave()") 
  } 
  ngOnDestroy() { 
    console.log("HomePage ngOnDestroy()") 
  } 
}
