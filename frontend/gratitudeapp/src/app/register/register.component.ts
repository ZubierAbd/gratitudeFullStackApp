import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  email: string;
  name: string;
  password: string;
  password2: string;

  constructor(private router: Router, private us: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password2': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  registerUser() {
    const name = this.name;
    const password = this.password;
    const email = this.email;
    const password2 = this.password2;

    if (this.password === this.password2) {
      this.us.registerUser({
        name,
        email,
        password
      }).subscribe((res) => {
        this.router.navigate([''])
      })
    }
  }

}
