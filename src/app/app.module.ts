import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { StartComponent } from './views/start/start.component';
import { RegisterComponent } from './views/register/register.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { SearchPageComponent } from './views/search-page/search-page.component';
import { SettingsComponent } from './views/settings/settings.component';
import { FormContactPageComponent } from './views/form-contact-page/form-contact-page.component';
import { LoginComponent } from './views/login/login.component';
import { CameraComponent } from './views/camera/camera.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavigationBarComponent,
    FormContactComponent,
    StartComponent,
    RegisterComponent,
    FormFieldComponent,
    PublicationCardComponent,
    FeedPageComponent,
    SearchPageComponent,
    SettingsComponent,
    FormContactPageComponent,
    LoginComponent,
    CameraComponent,
    UserProfileCardComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
