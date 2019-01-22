import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})

export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();
  @Input() value = '';

  jokeSetup: string = '';
  jokePunchline: string = '';
  btnText = 'Show punchline';

  ngOnInit() {}

  createJoke() {
    const newJoke = new Joke(this.jokeSetup, this.jokePunchline, this.btnText);
    this.jokeCreated.emit(newJoke);
    this.jokeSetup = '';
    this.jokePunchline = '';
  }


}
