import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //post data in back end 
  private baseUrl = 'http://localhost:8080/user/signup';
  constructor(private httpClient: HttpClient) {}

  signupUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user)
  }
}
