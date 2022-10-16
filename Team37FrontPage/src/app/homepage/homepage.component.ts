import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {DataService} from "../data.service";
import {User} from "../model/User";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.users = this.dataService.users;
  }


}
