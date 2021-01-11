import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: String[] =[];
  constructor() { }

  add(msg: String) {
    this.message.push(msg);
  }

  clear() {
    this.message = [];
  }
}
