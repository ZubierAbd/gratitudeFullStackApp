import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'days');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  private logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || "30d";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


  isLoggedOut() {
    return !this.isLoggedIn();
  }



  loginUser(request: any) {
    return this.http.post('http://localhost:5000/api/users/login', request).pipe(
      tap((res) => {
        this.setSession(res);
      })
    )
  }

  registerUser(request: any) {
    return this.http.post('http://localhost:5000/api/users', request)
  }

  getMe() {
    return this.http.get('http://localhost:5000/api/users/me')
  }
}
