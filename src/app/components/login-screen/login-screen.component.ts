import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  credentialError: null | string = null;
  errorLogin = '';
  dataLogin: null | any = null;

  async loginUser(loginForm: { login: string; password: string }) {
    this.credentialError = 'Deu erro no cpf';
    try {
      let { data, status } = await axios.post('http://localhost:8080/login', {
        credential: loginForm.login,
        password: loginForm.password,
      });

      return (this.dataLogin = data);
    } catch (error: any) {
      this.errorLogin = error.response.data.message;
      throw new Error();
    }
  }
}
