import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngnx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() logout = new EventEmitter();
  @Output() toggleSideNav = new EventEmitter();
}
