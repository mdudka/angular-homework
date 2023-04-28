import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  users: IUser[] = [];
  selectedUsers: IUser[] = [];
  searchValue = '';
  searchPlaceholder = 'Search users...';
  isAllSelected = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(userData: IUser): void {
    this.usersService.addUser(userData).subscribe((user) => {
      console.log(user);
      this.users.push(user);
    });
  }

  selectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.selectedUsers = [...this.users];
  }

  deleteUsers() {
    this.users = this.users.filter(
      (user) => !this.selectedUsers.includes(user)
    );
    for (const user of this.selectedUsers) {
      this.usersService
        .deleteUser(user.id)
        .subscribe()
    }
    this.selectedUsers = [];
  }

  sortUsers(order: string) {
    if (order === 'ascending') {
      this.users.sort((a, b) =>
        a['name'].toLowerCase() > b['name'].toLowerCase() ? 1 : -1
      );
    } else if (order === 'descending') {
      this.users.sort((a, b) =>
        a['name'].toLowerCase() < b['name'].toLowerCase() ? 1 : -1
      );
    }
  }

  onSearchValueEntered(value: string) {
    this.searchValue = value;
  }

  onUsersSelected(user: IUser) {
    if (!this.selectedUsers.includes(user)) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(
        () => !this.selectedUsers.includes(user)
      );
    }
  }
}
