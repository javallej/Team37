import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.dataService.getUsers().subscribe(
      (next) =>{
        this.users = next;}
    )
  }

}
