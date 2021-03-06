import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

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

  public signUpForm: FormGroup;

  public typeFormGroup: FormGroup;
  public personalFormGroup: FormGroup;
  public contactFormGroup: FormGroup;
  public credentialFormGroup: FormGroup;

  public types = ['Student', 'Teacher'];

  public genders = ['Male', 'Female', 'Other'];

  public maxDate: Date;

  public formIsSubmitted: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
  }

  static passwordMatch(
    abstractControl: AbstractControl
  ): { [key: string]: boolean } {
    let password = abstractControl.get('password').value;
    let confirmPassword = abstractControl.get('confirmPassword').value;

    if (password === confirmPassword) {
      return null;
    }

    return {'Passwords do not match': true};

    // todo: fix validator, not working when input is modified after being validated
  }

  ngOnInit() {
    this.maxDate = new Date();
    let today: Date = new Date();

    this.maxDate.setDate(today.getDate() - 1);

    //Form Groups

    this.typeFormGroup = this.formBuilder.group({
      type: ['Student', Validators.required],
      uid: ['', Validators.required, this.uidExists.bind(this)],
      stream: ['', Validators.required]
    });

    this.personalFormGroup = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z\']*$')]
      ],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\']*$')]],
      middleName: ['', [Validators.pattern('^[a-zA-Z]*$')]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });

    this.contactFormGroup = this.formBuilder.group({
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
        this.phoneNumberExists.bind(this)
      ],
      alternateNumber: [
        '',
        [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
        this.alternateNumberExists.bind(this)
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        this.emailExists.bind(this)
      ],
      address: ['', [Validators.required]]
    });

    this.credentialFormGroup = this.formBuilder.group(
      {
        email: [this.contactFormGroup.get('email').value, [Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/
            )
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/
            )
          ]
        ]
      },
      {
        validator: SignUpComponent.passwordMatch
      }
    );

    //Main sign up form

    this.signUpForm = new FormGroup({
      type: this.typeFormGroup,
      personal: this.personalFormGroup,
      contact: this.contactFormGroup,
      credentials: this.credentialFormGroup
    });
  }

  //Validators

  emailExists(emailControl: FormControl): Observable<any> {
    const email = emailControl.value;

    return this.authService.emailExists(email).pipe(
      map(response => {
        if (response.emailExists) {
          return {'Email exists': true};
        }

        return null;
      })
    );

    return null;
  }

  phoneNumberExists(numberControl: FormControl): Observable<any> {
    const number = numberControl.value;

    return this.authService.numberExists(number).pipe(
      map(response => {
        if (response.numberExists) {
          return {
            'Number exists': true
          };
        }

        return null;
      })
    );
  }

  alternateNumberExists(numberControl: FormControl): Observable<any> {
    const number = numberControl.value;

    if (number === '') return new Observable<null>();

    return this.authService.numberExists(number).pipe(
      map(response => {
        if (response.numberExists) {
          return {
            'Number exists': true
          };
        }

        return null;
      })
    );
  }

  uidExists(uidControl: AbstractControl): Observable<any> {
    const uid = uidControl.value;
    const type = this.typeFormGroup.get('type').value;

    return this.authService.uidExists(uid, type).pipe(
      map(response => {
        if (response.uidExists) {
          return {'UID exists': true};
        }

        return null;
      })
    );
  }

  onSubmit(finalSubmit: HTMLButtonElement) {
    //Setting email in credentials to the email used in contact

    finalSubmit.disabled = true;

    this.credentialFormGroup
      .get('email')
      .setValue(this.contactFormGroup.get('email').value);

    this.authService.createUser(this.signUpForm.value).subscribe(
      response => {
        this.router.navigate(['/signin']);
      },
      error => {
        finalSubmit.disabled = false;
      }
    );
  }

  //On submit handler

  public onUserTypeChange() {
    if (this.typeFormGroup.get('type').value !== 'Student') {
      this.typeFormGroup.get('stream').disable();
    } else {
      this.typeFormGroup.get('stream').enable();
    }

    this.typeFormGroup.get('uid').updateValueAndValidity();
  }
}
