import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User();

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {}
  userRegister() {
    this.signupService.signupUser(this.user).subscribe(
      (success) => {
        alert("Sign In Success! Go to Login Page!"),
        this.router.navigate(['login']);
      },
      (error) => alert(error.error.email)
    );
  }
}
