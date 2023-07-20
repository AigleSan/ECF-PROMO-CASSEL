import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private http: HttpClient){

  }


  onUserCreate(users: {username: string, email: string, password: string}){
    console.log(users);
    this.http.post('http://localhost:8080/api/auth/signup', users )
    .subscribe((data) => {
      console.log(data);
    });
  }
}
