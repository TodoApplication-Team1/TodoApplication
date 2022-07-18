import { Injectable } from "@angular/core";
import { userLogin } from "../model/userLogin.model";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable()
export class UserLoginService {
    constructor(private http: HttpClient) {}

    public addUserLoginDetails(
        
        userLoginDetails: userLogin
      ): Observable<userLogin> {
        const url = `http://localhost:8092/todo/login/signup`;
        console.log("url", url);
       
        return this.http.post<userLogin>(url, userLoginDetails);
      }

      public checkLoginDetails(
        
        userLoginDetails: userLogin
      ) : Observable<any>{
        // const url = `http://localhost:8092/todo/login/signin?userName=userLoginDetails.userName&password=userLoginDetails.password`;
        const url = `http://localhost:8092/todo/login/signin?userName=${userLoginDetails.userName}&password=${userLoginDetails.password}`;
        console.log("url", url);
       
        return this.http.get<any>(url);
      }
}