import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private http: HttpClient, private router: Router){}



  onUserCreate(users: {username: string, email: string, password: string}){
    console.log(users);
    this.http.post('http://localhost:8080/api/auth/signup', users )
    .subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/']);
  }
}
