import { NgModule } from '@angular/core';
import { UserLoginService } from './service/userLogin.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

import { SuccessComponent } from './success/success.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { TaskComponent } from './task/task.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    HomeComponent,
    SuccessComponent,
    ProfileComponent,
    NotificationComponent,
    TaskComponent,
    SettingsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule   
  ],
  providers: [
    UserLoginService,
    
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '441438537571918'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
