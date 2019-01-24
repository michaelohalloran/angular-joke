import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormControl;
  searches: string[] = [];
  piecemealSearches: string[] = [];


  ngOnInit() {
    this.searchForm = new FormControl(null);
    this.searchForm.valueChanges
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .subscribe(term => {
      // console.log('term: ', term);
      if (term.length > 0) {
        this.piecemealSearches.push(term);
      }
    });
  }

  addToSearches() {
    console.log('val changes: ', this.searchForm.valueChanges);
    //add term to searches array
    this.searches.unshift(this.searchForm.value);
    //clear input
    this.searchForm.reset();
  }

}
