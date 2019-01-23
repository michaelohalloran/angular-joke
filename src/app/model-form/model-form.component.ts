import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  langs: string[] = ['English', 'Spanish', 'French', 'German', 'Irish'];
  signupForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  formSubmitted: boolean = false;

  createFormControls() {
    this.firstName = new FormControl(null, Validators.required);
    this.lastName = new FormControl(null, Validators.required);
    this.email = new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    this.language = new FormControl(null);
  }

  createForm() {
    this.signupForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    console.log('form structure: ', this.signupForm);
    // console.log('value of signupForm: ', this.signupForm.value, this.signupForm.valid);
    this.formSubmitted = this.signupForm.valid ? true : false;
    this.signupForm.reset();
  }

}
