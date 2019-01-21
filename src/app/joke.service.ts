import { Injectable } from '@angular/core';
import {Joke} from './joke.model';

@Injectable({
  providedIn: 'root'
})

export class JokeService {

  private jokes:Joke[] = [
      new Joke('Text 1', 'A knock knock joke', 'Show punchline', true),
      new Joke('Text 2', 'punchline 2', 'Show punchline', true),
      new Joke('Text 3', 'punchline 3', 'Show punchline', true)
    ]


    getJokes() {
      console.log('initial service jokes: ', this.jokes);
      return this.jokes.slice();
    }

    getJoke(i: number) {
      return this.jokes[i];
    }

  changeBtnText(index: number) {
    // console.log('changeBtn idx: ', index);
    // console.log('changeBtn jokes: ', this.jokes);
    let text = this.jokes[index]['btnText'];
    //toggle the text
    text = text === 'Show punchline' ? 'Hide punchline' : 'Show punchline';
    this.jokes[index]['btnText'] = text;
  }

  showPunchline(joke: Joke) {
    joke.hide = !joke.hide;
  }


}