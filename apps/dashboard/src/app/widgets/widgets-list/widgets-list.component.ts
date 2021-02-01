import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';

@Component({
  selector: 'ngnx-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
