import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messeges',
  templateUrl: './messeges.component.html',
  styleUrls: ['./messeges.component.scss']
})
export class MessegesComponent {

  constructor(public messageService: MessageService) { }



}
