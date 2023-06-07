import { Injectable } from '@angular/core';
import {MessageComponent} from '../entities/message.types'
import {message} from '../entities/message';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  
  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  getMessages()
  {
    return this.afs.collection('/message').snapshotChanges();;
  }

  sendMessages(msg: MessageComponent)
  { 
    return this.afs.collection('/message').add(msg);
  }

  createId()
  {
    return this.afs.createId()
  }

}


