import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =  [
    {id:1,name:'"Variety is the spice of life"'},
    {id:2,name:'"buy cookies"'},
    {id:3,name:'"get a new phones"'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
