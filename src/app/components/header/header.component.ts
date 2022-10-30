import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() openClose: any;
  @Output() openCloseChange = new EventEmitter<boolean>();

  @Input() darkMode: any;
  @Output() darkModeChange = new EventEmitter<boolean>();

  setDarkMode() {
    this.darkModeChange.emit(!this.darkMode);
  }

  openCloseDropDown() {
    this.openCloseChange.emit(!this.openClose);
  }

  constructor() {}
}
