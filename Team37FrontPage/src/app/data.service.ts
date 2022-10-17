import { Injectable } from '@angular/core';
import {User} from "./model/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: Array<User> = new Array<User>();

  getUsers() : Observable<Array<User>> {
    return of(this.users);
  }

  constructor() {

    const user1 = new User();
    user1.name = "Joe";
    user1.password = "password";
    user1.email = "joe@asu.edu";

    const user2 = new User();
    user2.name = "Larry";
    user2.password = "pass";
    user2.email = "larry@asu.edu";

    const user3 = new User();
    user3.name = "Andrew";
    user3.password = "notapassword";
    user3.email = "andrew@asu.edu";

    const user4 = new User();
    user4.name = "Collin";
    user4.password = "passisgood";
    user4.email = "collin@asu.edu";

    const user5 = new User();
    user5.name = "Alexander";
    user5.password = "strongpass";
    user5.email = "alexander@asu.edu";

    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
    this.users.push(user4);
    this.users.push(user5);


  }
}
