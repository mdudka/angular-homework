import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../IUser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  enteredSearchValue = '';

  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChanged() {
    this.searchValueChanged.emit(this.enteredSearchValue);
  }
}
