import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { CameraComponent } from './views/camera/camera.component';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { LoginComponent } from './views/login/login.component';
import { SearchPageComponent } from './views/search-page/search-page.component';
import { SettingsComponent } from './views/settings/settings.component';
import { StartComponent } from './views/start/start.component';
import { FormContactPageComponent } from './views/form-contact-page/form-contact-page.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'camera', component: CameraComponent },
  { path: 'feed-page', component: FeedPageComponent },
  { path: 'form-contact-page', component:FormContactPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search-page', component:SearchPageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'start', component: StartComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', component: StartComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
