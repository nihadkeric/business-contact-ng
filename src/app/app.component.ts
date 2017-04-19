import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Bussinesses} from './model/Businesses';
import { Category } from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  
  businesses: Bussinesses[];
  categories: Category[];
  appState: string;
  activeKey: string;

  constructor(private _fs: FirebaseService){
  }

  ngOnInit(){
    this._fs.getBusinesses().subscribe(bussineses => {
      this.businesses = bussineses;
      console.log(bussineses);
    });

    this._fs.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

  changeState(state, key){
    console.log("Changing state to: "+ state);
    
    if(key){
      console.log("Changing key to: "+ key);
      this.activeKey = key;
    }

    if(state){
      this.appState = state;
    }
  }

}