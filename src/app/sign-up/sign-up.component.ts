import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormat = Intl.DateTimeFormat;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  /*
  The following are the form groups that are logical
  divisions of the entire sign up form
   */

  private signUpForm: FormGroup;

  private typeFormGroup: FormGroup;
  private personalFormGroup: FormGroup;
  private contactFormGroup: FormGroup;
  private passwordFormGroup: FormGroup;

  private isEditable = true;

  private types = [
    'Student',
    'Teacher'
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.typeFormGroup = this.formBuilder.group({
      'type': ['', Validators.required]
    });

    this.personalFormGroup = this.formBuilder.group({
      'firstName': ['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z']*$")
      ]],
      'lastName': ['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z']*$")
      ]]
      ,
      'middleName': ['',[
        Validators.pattern("^[a-zA-Z]*$")
      ]],
      'dateOfBirth': ['',
      [
        Validators.required,
        this.validateBirthdate
      ]]
      // 'gender': ['',[
      //   Validators.required
      // ]]
    });

    this.signUpForm = new FormGroup({
      type: this.typeFormGroup,
      personal: this.personalFormGroup
    });

  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  private validateBirthdate(dobControl: FormControl) : {[s: string]: boolean} {

    //todo: Check out the datepicker docs and complete the whole form

    return null;
  }

}
