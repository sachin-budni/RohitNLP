import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  loginFormGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  onSubmit(value) {
    this.auth.login(value).then(d => {
      this.router.navigate(['/admin']);
    }).catch(err => {
      console.log(err);
      this.error = err.code.replace('auth/', '');
    });
  }

  resetPassword(email: string) {
    if (!email.indexOf(' ') && !email.indexOf('@')) {
      this.auth.resetPassword(email);
    } else {
      this.error = 'email is requied';
    }
  }

}
