export interface MasterUserName {
  typeOfUser: string,
  personalDetails: {
    firstName: string,
    lastName: string
  }
}

export interface UserAuthInformation {
  userAuthStatus: boolean;
  userID: number;
  userType: string;
  userToken: string;
  expiresIn: number;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}

export interface UserMaster {
  id: number;
  typeOfUser: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserPersonal {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserContact {
  id: number;
  phoneNumber: string;
  alternateNumber: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
}

export interface Student {
  id: number;
  stream: string;
  uid: number;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
  masterUserDetails: MasterUserName
}

export interface Teacher {
  id: number;
  uid: number;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
  masterUserDetails: MasterUserName
}

export interface Profile extends UserMaster {
  personalDetails: UserPersonal;
  contactDetails: UserContact;
}
