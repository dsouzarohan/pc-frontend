import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
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

  private types = ["Student", "Teacher"];

  private genders = ["Male", "Female", "Other"];

  private maxDate: Date;

  private formIsSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.maxDate = new Date();
    let today: Date = new Date();

    this.maxDate.setDate(today.getDate() - 1);

    //Form Groups

    this.typeFormGroup = this.formBuilder.group({
      type: ["Student", Validators.required],
      uid: ["", Validators.required, this.uidExists.bind(this)],
      stream: ["", Validators.required]
    });

    this.personalFormGroup = this.formBuilder.group({
      firstName: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z']*$")]
      ],
      lastName: ["", [Validators.required, Validators.pattern("^[a-zA-Z']*$")]],
      middleName: ["", [Validators.pattern("^[a-zA-Z]*$")]],
      dateOfBirth: ["", [Validators.required]],
      gender: ["", [Validators.required]]
    });

    this.contactFormGroup = this.formBuilder.group({
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
        this.phoneNumberExists.bind(this)
      ],
      alternateNumber: [
        "",
        [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
        this.alternateNumberExists.bind(this)
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        this.emailExists.bind(this)
      ],
      address: ["", [Validators.required]]
    });

    this.credentialFormGroup = this.formBuilder.group(
      {
        email: [this.contactFormGroup.get("email").value, [Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/
            )
          ]
        ],
        confirmPassword: [
          "",
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

  private onUserTypeChange() {
    if (this.typeFormGroup.get("type").value !== "Student") {
      this.typeFormGroup.get("stream").disable();
    } else {
      this.typeFormGroup.get("stream").enable();
    }

    this.typeFormGroup.get('uid').updateValueAndValidity();
  }

  //Validators

  static passwordMatch(
    abstractControl: AbstractControl
  ): { [key: string]: boolean } {
    let password = abstractControl.get("password").value;
    let confirmPassword = abstractControl.get("confirmPassword").value;

    console.log(abstractControl);

    if (password === confirmPassword) {
      return null;
    }

    return { "Passwords do not match": true };
  }

  emailExists(emailControl: FormControl): Observable<any> {
    const email = emailControl.value;

    console.log(this.contactFormGroup);

    return this.userService.emailExists(email).pipe(
      map(response => {
        if (response.emailExists) {
          return { "Email exists": true };
        }

        return null;
      })
    );

    return null;
  }

  phoneNumberExists(numberControl: FormControl): Observable<any> {
    const number = numberControl.value;

    return this.userService.numberExists(number).pipe(
      map(response => {
        if (response.numberExists) {
          return {
            "Number exists": true
          };
        }

        return null;
      })
    );
  }

  alternateNumberExists(numberControl: FormControl): Observable<any> {
    const number = numberControl.value;

    if(number === "") return new Observable<null>();

    return this.userService.numberExists(number).pipe(
      map(response => {
        if (response.numberExists) {
          return {
            "Number exists": true
          };
        }

        return null;
      })
    );
  }

  uidExists(uidControl : AbstractControl): Observable<any>{

    const uid = uidControl.value;
    const type = this.typeFormGroup.get('type').value;

    return this.userService.uidExists(uid, type).pipe(
      map((response) => {
        if(response.uidExists){
          return {"UID exists": true};
        }

        return null;

      })
    );
  }

  //On submit handler

  onSubmit(finalSubmit: HTMLButtonElement) {
    //Setting email in credentials to the email used in contact

    finalSubmit.disabled = true;

    this.credentialFormGroup
      .get("email")
      .setValue(this.contactFormGroup.get("email").value);

    console.log(this.signUpForm.value);

    this.userService.createUser(this.signUpForm.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/signin']);
      },
      error => {
        console.log(error);
        finalSubmit.disabled = false;
      }
    );
  }
}
