import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider} from 'angularx-social-login';
import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  User: any= userLogin;
  constructor(private socialAuthService: SocialAuthService,
      private userLoginService: UserLoginService,
      private router:Router
      ) { }
  
  ngOnInit(): void {
    
  }
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
  }


  public addUser(f:any){
    this.router.navigateByUrl('/success');
    this.User={
    userName: f.fullname,
    password: f.password
  }
    
    console.log(this.User);
    this.userLoginService
    .addUserLoginDetails(this.User).subscribe(
      (data)=> {
        console.log("POST SUCCESS");
        console.log(data)
      }
    );
    
  }

}
