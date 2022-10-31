import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    this.loginservice.loginUser(this.user).subscribe(
      (data) => {
        // pattern to persist user and succeed in auth
        window.localStorage.setItem('currentUser', 'true'); 
        alert('Login Success!');
        this.router.navigate(['']);
      },
      (error) => {
        alert('No User Found');
      }
    );
  }
}
