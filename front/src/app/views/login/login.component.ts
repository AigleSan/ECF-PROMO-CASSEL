import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private http: HttpClient, private router: Router){}

onLogin(users: {username: string, password: string}){
  console.log(users);
  this.http.post('http://localhost:8080/api/auth/signin', users).subscribe((data) => {
    console.log(data);
  });
  var token;
  var username;
  localStorage.setItem('user', JSON.stringify({ token: token, username: username }));
  this.router.navigate(['/']);
}
  

}
