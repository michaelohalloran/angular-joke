import { Component, OnInit, Input } from '@angular/core';
import {Joke} from '../joke.model';
import { JokeService } from '../joke.service';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
}) 

export class JokeComponent implements OnInit {

  @Input() joke: Joke;
  @Input() jokes: Joke[];
  @Input() num: number;
  isDataLoaded: boolean = false;
    

  constructor(private jokeService: JokeService) {
    // console.log('ran individual constructor');
  }
  ngOnInit() {
    // console.log('ran individual init');
    // console.log('input jokes: ', this.jokes);
    this.isDataLoaded = (this.jokes) ? true : false;
  }

  toggleJoke(joke: Joke, index: number) {
    joke.toggle();
    this.jokeService.changeBtnText(index);
  }


}
