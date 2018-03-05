import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getUserDetails(username,password){
    //Post user details to api server
  console.log('getUserDetails',username,password);
  }

}
