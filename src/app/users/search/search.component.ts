import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() placeholder?: string;
  enteredSearchValue = '';

  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChanged() {
    this.searchValueChanged.emit(this.enteredSearchValue);
  }
}
