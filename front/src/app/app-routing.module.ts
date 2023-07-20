import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SigninComponent } from './views/signin/signin.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
