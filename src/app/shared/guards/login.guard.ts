import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from "app/service/login.service";


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router,private loginService: LoginService) {

    }

     canActivate() {
         console.log(this.loginService.loggedIn());
         if(this.loginService.loggedIn()) {
                return true;
         } else {
                this.router.navigate(['/login']);
                return false;
         }
    }

}