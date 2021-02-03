import { Component, OnInit } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';
import { WidgetsFacade } from '@ngnx/core-state';
import { Observable } from 'rxjs';

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'ngnx-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectWidget(emptyWidget);
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget);
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    // this.widgetsService.create(widget).subscribe((result) => this.reset());
  }

  updateWidget(widget: Widget) {
    // this.widgetsService.update(widget).subscribe((result) => this.reset());
  }

  deleteWidget(widget: Widget) {
    // this.widgetsService.delete(widget).subscribe((result) => this.reset());
  }
}
