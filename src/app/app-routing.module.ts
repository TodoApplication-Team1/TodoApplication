import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SuccessComponent } from './success/success.component';
import { TaskComponent } from './task/task.component';
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "success",
    component: SuccessComponent,
    children: [
    {
      path: "home",
      component: HomeComponent,
    },]
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "calendar",
    component: CalendarComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "notification",
    component: NotificationComponent,
  },
  {
    path: "task",
    component: TaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
