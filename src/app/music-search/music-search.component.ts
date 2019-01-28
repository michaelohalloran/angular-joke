import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Song } from '../song.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  // songs: any[] = [];
  private loading: boolean = false;
  private results: Observable<Song[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(tap(()=> this.loading = true))
      .pipe(switchMap(term => this.itunes.search(term)))
      .pipe(tap(()=> this.loading = false))
    
    // this.getSongs();
    // console.log('ran onInit getSongs');
    // this.itunes.songsChanged.subscribe(
    //   songs => {
    //     this.songs = songs;
    //     console.log('this.songs: ', this.songs);
    //   }
    // );
  }

  // getSongs() {
  //   this.songs = this.itunes.results;
  // }

  // onSearch(term: string) {
  //   console.log(`You searched for ${term}`);
  //   this.loading = true;
  //   this.itunes.search(term)
  //     .then(()=> this.loading = false);
  // }

  onSearch(term: string) {
    console.log(`You searched for ${term}`);
    this.loading = true;
    this.itunes.search(term)
      .subscribe(
        data => {
          this.loading = false;
          this.results = this.itunes.search(term);
        }
      )
  }

}
