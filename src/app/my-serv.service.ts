import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServService {
  private messageSource = new BehaviorSubject<string>('qqdqwd');
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
