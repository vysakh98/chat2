import { Injectable } from '@angular/core';

import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserInfo } from '../entities/user.types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userInfo:UserInfo={
    name:'',
    email:'',
    Url:'',
    isLoggein:false
  }

  constructor(private auth: Auth,private route:Router) {
   }

  loginwithgoogle()
  {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then((result)=>{
      console.log(result);
      this.userInfo.name=result.user.displayName?result.user.displayName:"";
      this.userInfo.email=result.user.email?result.user.email:"";
      this.userInfo.Url=result.user.photoURL?result.user.photoURL:"";
      this.userInfo.isLoggein=true;
      this.route.navigate(['/chat']);
    })
    .catch((e) => console.log(e.message));
  }

  signOut()
  {
    return signOut(this.auth).then(()=>{
      this.route.navigate([''])
    });
  }

  getUser()
  {  
      return this.userInfo;
  }

}
