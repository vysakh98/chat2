import { Component,OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service'
import { message } from '../entities/message';
import { MessageComponent } from '../entities/message.types';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent {
  msg:string="";
  messages:MessageComponent[] =[]
  constructor(private auth: AuthService,private chatSetrvice:ChatService,private route:Router){
  }

  ngOnInit()
  {
    console.log(this.auth.getUser())
    console.log('hello');
    this.getMessages();
  }

  sendMessage()
  {
    let msg:MessageComponent={
      $key:this.chatSetrvice.createId(),
      message:this.msg
    };
    this.chatSetrvice.sendMessages(msg)
    console.log(this.messages);
  }

  getMessages()
  {
    this.chatSetrvice.getMessages().subscribe(m=>{
      this.messages = m.map((e: any) => {
        const data = e.payload.doc.data();
        return data;
      })
    });
  }

  logout()
  {
    this.auth.signOut()
  }

  get getUserInfo()
  {
    return this.auth.getUser();
  }
  
}
