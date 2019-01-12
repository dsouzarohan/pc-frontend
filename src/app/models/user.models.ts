export interface MasterUserName {
  typeOfUser: string,
  MasterUserPersonal: {
    firstName: string,
    lastName: string
  }
}

export interface UserAuthInformation {
  userAuthStatus: boolean;
  userID: string;
  userType: string;
  userToken: string;
  expiresIn: number;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}

export interface UserMaster {
  id: string;
  typeOfUser: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserPersonal {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserContact {
  id: string;
  phoneNumber: string;
  alternateNumber: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
}

export interface Student {
  id: string;
  stream: string;
  uid: number;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
  MasterUser: MasterUserName
}

export interface Teacher {
  id: string;
  uid: string;
  createdAt: string;
  updatedAt: string;
  masterUserId: string;
  MasterUser: MasterUserName
}

export interface Profile extends UserMaster {
  MasterUserPersonal: UserPersonal;
  MasterUserContact: UserContact;
}
