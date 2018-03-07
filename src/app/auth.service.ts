import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  getUserDetails(username, password) {
    //Post user details to api server
    console.log('getUserDetails', username, password);

    return this.http.post('http://localhost:5000/getUserDetails',{
      username,
      password
    });

  }

  logout(){
    console.log('from logout');

    return this.http.get('http://localhost:5000/logout');

  }

}
