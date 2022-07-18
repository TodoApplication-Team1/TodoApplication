import { Component, OnInit} from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  

  getData:any;
  User: any= userLogin;
  
  constructor(
    private userLoginService: UserLoginService,
    private socialAuthService: SocialAuthService,
    
     ) {}
  
  
  userExist(f:any){
    this.User={
      userName: f.fullname,
      password: f.password
    }
    this.userLoginService.checkLoginDetails(this.User).subscribe(
      (data)=>{
        console.log(data);
        console.log("GET SUCCESS");
      }
      // (data)=>{
      //   console.log("GET SUCCESS");
      //   console.log(data.url.error.text);
      //   this.getData=data.url.error.text;
        
      // }
    );
      
     
  }
 
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);

    
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
 
  ngOnInit() {
    
  }
}

