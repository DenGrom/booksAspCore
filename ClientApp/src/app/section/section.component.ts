import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserRole} from 'src/app/Models/userRole';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  private isStandartUser: boolean;
  constructor() { 
    var currentUser = localStorage.getItem('currentUser');
    if(currentUser)
    {

      var user = <User>JSON.parse(localStorage.getItem('currentUser'));
      this.isStandartUser = user.userRole == UserRole.Standard;
    }
     
  }

  ngOnInit() {
  }

}
