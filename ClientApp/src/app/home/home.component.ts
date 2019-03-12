import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Book } from '../book';
import { User } from '../user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Array<Book>;
  users: User[] = [];
  constructor(
    private data: DataService,
    private userService: UserService) { }

  ngOnInit() {

    this.books = this.data.getHomeContentData();

    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
  }

}
