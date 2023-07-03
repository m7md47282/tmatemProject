import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginInputs = {
    email: "",
    password: ""
  }


  constructor() {
  }

  login(form: any) {
    if(form.valid){
      console.log('Email:', this.loginInputs.email);
      console.log('Password:', this.loginInputs.password);
    }else
      console.log('invalid form');
      
    // this.resetFrom()
  }

  ngOnInit(): void {}

  resetFrom() {
    this.loginInputs = {
      email: "",
      password: ""
    }

  }

}
