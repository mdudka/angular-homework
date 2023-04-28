import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from './IUser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(this.usersUrl)
      .pipe(map((users: IUser[]) => users.slice(0, 4)));
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.usersUrl, user);
  }

  deleteUser(id: number): Observable<unknown> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url);
  }
}
