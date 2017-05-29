import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {

    }

     canActivate() {
        //add authentication validation 
    
        return true;
    }

}