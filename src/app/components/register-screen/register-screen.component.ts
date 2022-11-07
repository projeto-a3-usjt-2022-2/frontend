import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {
  
  dataLogin: null | any = null;
  errorLogin = '';
  constructor() { }

  ngOnInit(): void {
  }
  async registerUser(registerForm:{
    name: string;
    lastname: string;
    cpf:string;
    birthDate: string;
    sex: string;
    convenio: string;
    email: string;
    remail: string;
    password: string;
    repassword: string }) {
      try {
        let { data, status } = await axios.post('http://localhost:8081/createUser', {
          credential: registerForm.name,
          password: registerForm.password,
        });
  
        return (this.dataLogin = data);
      } catch (error: any) {
        console.log(registerForm.name)
        this.errorLogin = error.response.data.message;
        
      }
 }
}
