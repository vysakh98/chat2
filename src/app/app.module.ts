import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { enviornment } from 'src/enviornments/enviornment';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { appRoutes } from 'src/routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthService } from './services/auth.service';
import { AuthGuard } 
from './services/authgaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatpageComponent,
    LoginComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(enviornment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(enviornment.firebase),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
