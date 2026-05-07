import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonInput, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, FormsModule, IonInput, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  keyword:string = "";
  
  constructor(private router:Router, private ds:Data) {}

  async openMovies() {
    await this.ds.set("kw", this.keyword);

    if(this.keyword == "") {
      this.router.navigate(['/trending-movies']);
    }
    else {
      this.router.navigate(['/movies']);
  }
}

}
