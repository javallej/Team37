import { Injectable } from '@angular/core';
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: Array<User> = new Array<User>();

  constructor() {

    const user1 = new User();
    user1.name = "Joe";
    user1.password = "password";
    user1.email = "joe@asu.edu";

    const user2 = new User();
    user2.name = "Larry";
    user2.password = "pass";
    user2.email = "larry@asu.edu";

    this.users.push(user1);
    this.users.push(user2);


  }
}
