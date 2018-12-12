import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, switchMap, Observable } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private userService: UserService) { }

  canActivate(): Observable<boolean> {
    this.auth.user$.pipe(
      switchMap(user => {
      return this.userService.get(user.uid);
    }))
    .subscribe(appUser => appUser.isAdmin);

  }

}