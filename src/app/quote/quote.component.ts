import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =  [

    new Quote(1, '"Variety is the spice of life"', 'hooooooooooo'),
    new Quote(2,'"buy cookies"','hiiiiiiiiiii'),
    new Quote(3,'Get new Phone Case','seeeeeeeeeeee'),

   ];

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
