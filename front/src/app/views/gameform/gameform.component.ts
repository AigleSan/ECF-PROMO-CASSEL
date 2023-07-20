import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css']
})
export class GameformComponent {
  constructor(private http: HttpClient, private router: Router) { }

  onGameCreate(games: { title: string, description: string, image: File, studio_name: string, platforms: string, space: Number, score: Number, game_engine: string, release_date: Date }) {
    console.log(games);
    this.http.post('http://localhost:8080/api/games/', games).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/']);

  }

}
