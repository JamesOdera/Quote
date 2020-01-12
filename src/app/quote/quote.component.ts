import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =  [

    new Quote(1, '"Variety is the spice of life"', 'hooooooooooo',new Date(2020,0,1)),
    new Quote(2,'"buy cookies"','hiiiiiiiiiii',new Date(2019,8,14)),
    new Quote(3,'Get new Phone Case','seeeeeeeeeeee',new Date(2020,4,11)),

   ];

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
      this.quotes.splice(index,1);
    }
  }

  }

  constructor() { }

  ngOnInit() {
  }

}
