import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private loginStatus:boolean = false; 
  
  constructor( @Inject(Http) private http: Http, private router: Router) { 
    this.getlogin();
  }
  

  setLoggedIn(value:boolean){
    this.loginStatus= value;
  }

  get isLoggedIn(){
    return this.loginStatus;
  }

  getlogin(){
    this.http.get('http://localhost:5000/login').subscribe( data=>{
      console.log('getlogin data');
      console.log(data);

      if(data.status == 200){
      this.setLoggedIn(true);
      }else{
        this.setLoggedIn(false);
        this.router.navigate(['/']);
      }

    })
  }

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
