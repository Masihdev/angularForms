import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularForms';
  @ViewChild('myForm') form: NgForm;
  defaultCountryl = 'india';

  firstname: string;
  lastname: string;
  email: string;
  country: string;
  gen: string;

  defaultGender: string = 'Male';

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ]


  onSubmit() {
    console.log(this.form);
    this.firstname = this.form.value.personalDetails.firstname;
    this.lastname = this.form.value.personalDetails.lastname;
    this.email = this.form.value.personalDetails.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;

    this.form.reset();
  }


  setDefaultValues() {
    // this.form.value.personalDetails.firstname.setv = 'John';
    // this.form.value.personalDetails.lastname = 'Doe';
    // this.form.value.personalDetails.email = 'johndoe@gmail.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personalDetails: {
    //     firstname: 'John',
    //     lastname: 'Doe',
    //     email: 'johndoe@gmail.com'
    //   }
    // });

    this.form.form.patchValue({
      personalDetails: {
        firstname: 'Foo',
        lastname: 'Bar',
        email: 'foobar@gmail.com'
      }
    });
  }



}
