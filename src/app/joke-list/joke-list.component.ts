import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Joke } from '../joke.model';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements OnInit {

  jokes: Joke[] = [];


  constructor(private jokeService: JokeService) {}

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
    console.log('JokeList onInit');

    this.jokes = this.jokeService.getJokes();
    console.log('this.jokes in JokeList: ', this.jokes);

  }
  
  addJoke(e) {
    console.log('evt: ', e);
  }


}