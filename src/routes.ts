import { Route, Routes } from "@angular/router";
import {ChatpageComponent} from 'src/app/chatpage/chatpage.component';
import {LoginComponent} from 'src/app/login/login.component';
import { AuthGuard } 
from '../src/app/services/authgaurd.service';
export const appRoutes: Routes =[
    {path:"chat",component:ChatpageComponent,canActivate: [AuthGuard]},
    {path:"\login",component:LoginComponent},
    {path:"",redirectTo:"\login",pathMatch:"full"}
]