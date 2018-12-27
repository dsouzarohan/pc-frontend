export interface UserMaster {
  id: string;
  typeOfUser: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserPersonal{
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserContact{
  id: string;
  phoneNumber: string;
  alternateNumber: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  masterUserID: string;
}

export interface Student {
  id: string;
  stream: string;
  uid: number;
  createdAt: string;
  updatedAt: string;
  masterUserID: string;
}

export interface Teacher {
  id: string;
  uid: string;
  createdAt: string;
  updatedAt: string;
  masterUserID: string;
}

export interface Profile extends UserMaster{
  MasterUserPersonal: UserPersonal;
  MasterUserContact: UserContact;
}