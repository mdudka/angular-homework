import {Component, EventEmitter, Input, Output} from '@angular/core';

import { IUser } from "../IUser";

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
  @Input() user?: IUser;
  checked = false;

  @Output()
  userSelected: EventEmitter<IUser> = new EventEmitter<IUser>();

  onUserSelected() {
    this.userSelected.emit(this.user);
  }
}
