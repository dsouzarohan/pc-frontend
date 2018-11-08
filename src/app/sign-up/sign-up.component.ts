import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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

  @ViewChild('confirmPassword') confirmPassword: ElementRef;

  private signUpForm: FormGroup;

  private typeFormGroup: FormGroup;
  private personalFormGroup: FormGroup;
  private contactFormGroup: FormGroup;
  private credentialFormGroup: FormGroup;

  private types = [
    'Student',
    'Teacher'
  ];

  private genders = [
    'Male',
    'Female',
    'Other'
  ];

  private maxDate: Date;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.maxDate = new Date();
    let today: Date = new Date();

    this.maxDate.setDate(today.getDate()-1);

    //Form Groups

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
        Validators.required
      ]],
      'gender': ['',
        [
          Validators.required
        ]]
    });

    this.contactFormGroup = this.formBuilder.group({
      mobileNumber: ['',[
        Validators.required,
        Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
      ]],
      alternateMobileNumber: ['',Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      email: ['',[
        Validators.required,
        Validators.email
      ]]
    })

    this.credentialFormGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/),
        this.passwordMatch.bind(this)
      ]],
      confirmPassword: ['',[
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/),
        this.passwordMatch.bind(this)
      ]]
    });

    //Main sign up form

    this.signUpForm = new FormGroup({
      type: this.typeFormGroup,
      personal: this.personalFormGroup,
      contact: this.contactFormGroup,
      credentials: this.credentialFormGroup
    });

  }

  passwordMatch(passwordControl: FormControl): {[key: string]: boolean}{

    //todo: fix the error of cannot read 'get' caused by the two lines below and complete the form

    let password = this.credentialFormGroup.get('password').value;
    // let confirmPassword = this.credentialFormGroup.get('confirmPassword').value;

    // if(password === confirmPassword){
    //   return null;
    // }

    return {'Passwords do not match': true};
  }

  onSubmit(){
    console.log(this.credentialFormGroup);
  }

}
