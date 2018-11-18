import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

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
      alternateNumber: ['',Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      email: ['',[
        Validators.required,
        Validators.email
      ], this.emailExists.bind(this)
      ],
      address: ['',[
        Validators.required
      ]]
    });

    this.credentialFormGroup = this.formBuilder.group({
      email: [this.contactFormGroup.get('email').value, [
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/)
      ]],
      confirmPassword: ['',[
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/)
      ]]
    },{
      validator: SignUpComponent.passwordMatch
    });

    //Main sign up form

    this.signUpForm = new FormGroup({
      type: this.typeFormGroup,
      personal: this.personalFormGroup,
      contact: this.contactFormGroup,
      credentials: this.credentialFormGroup
    });

  }

  static passwordMatch(abstractControl: AbstractControl): {[key: string]: boolean}{

    let password= abstractControl.get('password').value;
    let confirmPassword = abstractControl.get('confirmPassword').value;

    // console.log(abstractControl);

    if(password === confirmPassword){
      return null;
    }

    return {'Passwords do not match': true};
  }

  emailExists(emailControl: FormControl): Observable<any> {

    console.log('Email val called');

    const email = emailControl.value;

    return this.authService.emailExists(email).pipe(
      map(response => {



        console.log(emailControl);
        console.log(response);

        if(!(<any> response).emailExists){
          return null;
        }

        return {'Email exists': true};

      })
    );

    return null;
  }

  onSubmit(){

    //Setting email in credentials to the email used in contact
    this.credentialFormGroup.get('email').setValue(this.contactFormGroup.get('email').value);

    this.authService.createUser(this.signUpForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

}
