import { Component } from '@angular/core';
import{AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService,private route:Router){
  }

  Loginwithgoogle()
  {
    this.auth.loginwithgoogle();
  }

}
