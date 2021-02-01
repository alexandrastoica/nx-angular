import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';

@Component({
  selector: 'ngnx-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.scss']
})
export class WidgetDetailComponent {
  currentWidget: Widget;
  originalTitle = '';

  @Input() set widget(value: Widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
