import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
import { CleanPipe } from './clean.pipe';
import { ModelFormComponent } from './model-form/model-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpComponent } from './http/http.component';
import { HttpModule } from '@angular/http';
import { MusicSearchComponent } from './music-search/music-search.component';
import { SearchService } from './search.service';
import { CompositeComponent } from './fuse/composite/composite.component';
import { PropertySelectorComponent } from './fuse/composite/property-selector/property-selector.component';
import { GridCompositeComponent } from './fuse/grid-composite/grid-composite.component';
import { GridRowComponent } from './fuse/grid-composite/grid-row/grid-row.component';
import { GridColumnComponent } from './fuse/grid-composite/grid-column/grid-column.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeComponent,
    CleanPipe,
    ModelFormComponent,
    SearchFormComponent,
    HttpComponent,
    MusicSearchComponent,
    CompositeComponent,
    PropertySelectorComponent,
    GridCompositeComponent,
    GridRowComponent,
    GridColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [JokeService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
