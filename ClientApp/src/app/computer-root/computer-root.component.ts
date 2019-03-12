import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-computer-root',
  templateUrl: './computer-root.component.html',
  styleUrls: ['./computer-root.component.css']
})
export class ComputerRootComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {

    var contentData = this.data.getComputerRootContentData();

}

}
