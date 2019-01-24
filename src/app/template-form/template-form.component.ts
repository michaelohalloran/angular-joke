import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Signup } from '../signup.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  langs: string[];
  model: Signup = new Signup();
  @ViewChild('f') signupForm: NgForm;

  ngOnInit() {
    this.langs = ['English', 'Irish', 'French', 'German', 'Spanish'];
  }

  onSubmit(form) {
    console.log('model: ', this.model);
    console.log('form: ', form);
    console.log('Viewchild form: ', this.signupForm);
    this.signupForm.reset();
  }

}
