import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserRole} from 'src/app/Models/userRole';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            var roleForPath = route.data.roles[0];
            var roleCurrentUser = currentUser.userRole.toString();
            debugger;

            if(roleForPath == roleCurrentUser)
            {
                return true;
            }
            else{
                return false;
            }

        }
        debugger;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            var roleForPath = route.data.roles[0];
            var roleCurrentUser = currentUser.userRole.toString();
            debugger;

            if(roleForPath == roleCurrentUser)
            {
                return true;
            }
            else{
                return false;
            }

        }
            

    };

}