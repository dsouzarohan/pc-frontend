export interface SignUpResponse {
  message: string;
}

export interface SignInResponse {
  token: string;
  expiresIn: number;
  userID: number;
  type: string;
}

export interface EmailExistsResponse {
  emailExists: boolean;
}

export interface PhoneNumberExistsResponse {
  numberExists: boolean;
}

export interface UIDExistsResponse {
  uidExists: boolean;
}
