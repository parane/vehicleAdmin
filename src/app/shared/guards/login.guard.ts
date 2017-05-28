import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {

    }

     canActivate() {
        if (confirm('are you login?')) {
            // this.router.navigate(['/', 'login']);
            return true;

        }
        return false;
    }

}