import { Component, inject } from '@angular/core';
import { UserService } from '../../maquinas/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule,FormsModule],
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  }

  router = inject(Router);

  constructor(private userSrv: UserService ) {

  }

  login() {
    const usrb = {
      username:this.loginObj.EmailId,
      password: this.loginObj.Password
    }
    console.log(usrb)
    this.userSrv.onLogin(usrb).subscribe((res:any)=> {
      console.log("hola" + res)
      if(res.result) {
        localStorage.setItem('token', res.data.token);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message)
      }
    },error=>{(error:any)=>
      console.log("hola" + error)
      alert("Wrong Credentials")
    })
  }
}