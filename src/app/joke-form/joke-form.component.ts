import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})

export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();

  ngOnInit() {}

  sendJoke() {}


}
