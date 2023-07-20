import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SigninComponent } from './views/signin/signin.component';
import { LoginComponent } from './views/login/login.component';
import { GameformComponent } from './views/gameform/gameform.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameform', component: GameformComponent },
  { path: 'profile', component: UserProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
