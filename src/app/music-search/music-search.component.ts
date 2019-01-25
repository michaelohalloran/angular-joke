import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  songs: any[] = [];
  private loading: boolean = false;

  constructor(private itunes: SearchService) {}

  ngOnInit() {
    this.getSongs();
    console.log('ran onInit getSongs');
    this.itunes.songsChanged.subscribe(
      songs => {
        this.songs = songs;
        console.log('this.songs: ', this.songs);
      }
    );
  }

  getSongs() {
    this.songs = this.itunes.results;
  }

  onSearch(term: string) {
    console.log(`You searched for ${term}`);
    this.loading = true;
    this.itunes.search(term)
      .then(()=> this.loading = false);
  }

}
