import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes: Quote [] =  [
     {id:1,name:'"Variety is the spice of life"'},
     {id:2,name:'"buy cookies"'},
     {id:3,name:'"get a new phones"'},
    ];
  }

