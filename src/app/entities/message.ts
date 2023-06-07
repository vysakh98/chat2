import {MessageComponent} from  './message.types'

export class message implements MessageComponent
{
    constructor(){
    } 
    $key?: string;
    message?: string;
    email?: string;
    timeSent?: Date;
}