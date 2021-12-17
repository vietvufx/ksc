import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../common-interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= true;
  public errorMsg = '';
  user = new User();
  public isLogin:boolean=false;

  constructor(private _router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  async wait(ms: number): Promise<void> {
		return new Promise<void>( resolve => setTimeout( resolve, ms) );
	}

  onLogin(form: NgForm){
    this.isLogin=true;
    // this.user.username=username;
    // this.user.password=password;
    let body = {"username": form.value.username, "password":form.value.gpassword}
    let headers = {"X-device":"123"}
    //  if(!this.auth.login(this.user.username,this.user.password)){
    //           this.errorMsg = 'Failed to login';
    //       }
    this.http.post<any>(environment.apiURL+environment.apiLogin, body, {headers}).subscribe(res => {
      localStorage.setItem("accessToken", res.data)
      this._router.navigate(['./admin'])
    });
    this.wait(2000).then( () => this.isLogin = false );
  }
}

