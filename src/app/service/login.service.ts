import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class LoginService {

  REMOTE_URL ="https://vehicle-demo-para1.herokuapp.com"

  constructor(private http: Http) { }

  validateLogin(name,password) {
      
    return new Promise((resolve, reject) => {
      this.http.get(this.REMOTE_URL + '/authenticate/'+'?name='+name+'&password='+password)

        .map(res => res.json())
        .subscribe(res => {
          console.log(res.token);
        //   this.lock.on("authenticated", (authResult) => {
        //         localStorage.setItem('id_token', authResult.idToken);
        //     });
           localStorage.setItem('id_token', res.token)
          resolve(res);
        }, (err) => {
          console.log(err);

          reject(err);
        });
    });
  }

  loggedIn() {
      var token = localStorage.getItem('id_token')
    
   return tokenNotExpired(null, token);
}

}
