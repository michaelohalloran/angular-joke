import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
import { CleanPipe } from './clean.pipe';
import { ModelFormComponent } from './model-form/model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeComponent,
    CleanPipe,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
