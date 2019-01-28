import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Song } from './song.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiRoot: string = 'https://itunes.apple.com/search';
  results: Song[];
  loading: boolean;
  // curatedResults: Object[];
  @Output() songsChanged = new EventEmitter<Object[]>();

  constructor(private http: Http) { 
    this.results = [];
    this.loading = false;
  }
  
  formatTime(ms: number) {
    let mins = Math.floor(ms/60);
    let secs = (Math.floor(ms%60)=== 0) ? `00`: Math.floor(ms%60);
    return `${mins}:${secs}`;
  }

  // makeSongDivs(songs) {
  //   return songs.map(song => {
  //     return {
  //       artistName: song.artistName,
  //       collectionName: song.collectionName,
  //       trackName: song.trackName,
  //       img: song.artworkUrl100,
  //       time: this.formatTime((song.trackTimeMillis)/1000)
  //     }
  //   })
  // }


  // search(term: string) {
  //   let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get(apiURL)
  //       .toPromise()
  //       .then(res => {
  //         this.results = res.json().results.map(song => {
  //           let time = this.formatTime(song.trackTimeMillis/1000);
  //           return new Song(
  //             song.trackName,
  //             song.collectionName,
  //             song.artistName,
  //             song.artworkUrl100,
  //             time
  //           )
  //         });
  //         console.log('results: ', this.results);
  //         resolve();
  //         this.songsChanged.emit(this.results);
  //         return this.results;
  //       },
  //       errMsg => {
  //         reject();
  //       })
  //       // .then(data => {
  //       //   this.curatedResults = this.makeSongDivs(data);
  //       //   console.log('curated: ', this.curatedResults);
  //       //   this.songsChanged.emit(this.curatedResults);
  //       // },
  //   });
  //   return promise;
  // }

  search(term: string): Observable<Song[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
      return this.http.get(apiURL)
        .pipe(
          map(res => {
            console.log('res json: ', res.json());
            this.results = res.json().results.map(item => {
              let time = this.formatTime(item.trackTimeMillis/1000);
              return new Song(
                item.trackName,
                item.collectionName,
                item.artistName,
                item.artworkUrl100,
                time
              )
            });
            this.songsChanged.emit(this.results);
            return this.results;
          })
        )
  }

}
