import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logoutUser(){
    this.auth.logout().subscribe(data=>{
      console.log('logout Response');
      console.log(data);
    })
  }
}
