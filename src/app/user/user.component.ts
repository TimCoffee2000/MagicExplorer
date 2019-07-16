import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyServService} from '../my-serv.service';

@Component({
  selector: 'app-search',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';
  response: any;
  user: string;

  constructor(private http: HttpClient, private data: MyServService) {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.user = message);
  }

}




