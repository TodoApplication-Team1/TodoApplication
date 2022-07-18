import {  OnInit, Component } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  getData:any;
  User: any= userLogin;
  error = null;
  constructor(
    private userLoginService: UserLoginService,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit() {
    
  }
  
  userExist(f:any){
    this.User={
      userName: f.fullname,
      password: f.password
    }
    this.userLoginService.checkLoginDetails(this.User).subscribe(
      (data)=>{
        console.log("GET SUCCESS");
        console.log(data.url.error.text);
        this.getData=data.url.error.text;
        
      }
    );
      
     
  }
  
  
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

 
}
