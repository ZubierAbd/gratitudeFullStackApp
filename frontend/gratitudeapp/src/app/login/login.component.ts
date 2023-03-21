import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  email: string;
  password: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  login() {
    const email = this.email;
    const password = this.password;
    console.log('we hitting this')

    this.us.loginUser({
      email,
      password
    }).subscribe((res) => {
      console.log(res)
    })
  }
}
