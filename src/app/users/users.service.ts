import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IUser} from "./IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.usersUrl, user)
  }
}
