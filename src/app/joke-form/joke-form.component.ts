import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Joke } from '../joke.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JokeService } from '../joke.service';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})

export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();
  @Input() value = '';

  jokeSetup: string = '';
  jokePunchline: string = '';
  btnText = 'Show punchline';
  jokeForm: FormGroup;
  setupCtrl: FormControl;
  punchlineCtrl: FormControl;

  constructor(private jokeService: JokeService) {}

  createFormControls() {
    this.setupCtrl = new FormControl(null, Validators.required);
    this.punchlineCtrl = new FormControl(null, Validators.required);
  }

  createForm() {
    this.jokeForm = new FormGroup({
      setupCtrl: this.setupCtrl,
      punchlineCtrl: this.punchlineCtrl
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createJoke() {
    const newJoke = new Joke(this.jokeSetup, this.jokePunchline, this.btnText);
    this.jokeCreated.emit(newJoke);
    this.jokeSetup = '';
    this.jokePunchline = '';
  }

  onSubmitJoke() {
    console.log('form vals: ', this.jokeForm);
    const newJoke = new Joke(this.jokeForm.value.setupCtrl, this.jokeForm.value.punchlineCtrl);
    //push new joke to jokes array
    this.jokeService.addJoke(newJoke);
    //clear form
    this.jokeForm.reset();
  }


}
