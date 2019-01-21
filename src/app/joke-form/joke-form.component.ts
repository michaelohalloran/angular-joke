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
  
  setup: string = '';
  punchline: string = '';
  btnText = 'Show punchline';

  ngOnInit() {}

  addJoke() {
    const newJoke = new Joke(this.setup, this.punchline, this.btnText);
    this.jokeCreated.emit(newJoke);
    this.setup = '';
    this.punchline = '';
  }


}
