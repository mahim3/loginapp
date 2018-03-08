import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    console.log(event);
     
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password= target.querySelector('#password').value;
    
    console.log('Target', target);
    console.log('username', username);
    console.log('password', password);

    this.auth.getUserDetails(username,password).
    subscribe(data =>{
      
      if(data.status == 200){
        console.log(data);
        // this.auth.setLoggedIn(true);
        this.router.navigate(['/admin']);
      }else{
        alert('invalid data');
      }
      

    });
  }
 

}
