import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Joke } from '../joke.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements OnInit {

  jokes: Joke[] = [];
  subscription: Subscription;


  constructor(private jokeService: JokeService) {
    this.jokes = this.jokeService.getJokes();
  }

  ngOnInit() {
    // const promise = new Promise((resolve, reject)=> {
    //   setTimeout(()=> {
    //     this.jokes = this.jokeService.getJokes();
    //     resolve('done');
    //   }, 2000);
    // });
    // return promise;
    // setTimeout(()=> {
    //   this.jokes = this.jokeService.getJokes();
    // }, 1000);
    // console.log('JokeList onInit');

    this.subscription = this.jokeService.jokesUpdated.subscribe(
      (jokes: Joke[]) => {
        this.jokes = jokes;
      }
    )
  }
  
  onAddJoke(e) {
    // console.log('evt: ', e);
    this.jokeService.addJoke(e);
  }


}