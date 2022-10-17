import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  user: User = new User();

  constructor() { }

  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.user)
  }

}
