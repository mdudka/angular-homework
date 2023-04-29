import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from './IUser';
import { catchError, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl).pipe(
      catchError(() =>
        throwError(
          () => new Error(`Something went wrong while fetching the users.`)
        )
      ),
      map((users: IUser[]) => users.slice(0, 4))
    );
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(this.usersUrl, user)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error(`Something went wrong while adding the user.`)
          )
        )
      );
  }

  deleteUser(id: number): Observable<unknown> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .delete(url)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error(`Something went wrong while deleting the user.`)
          )
        )
      );
  }
}
