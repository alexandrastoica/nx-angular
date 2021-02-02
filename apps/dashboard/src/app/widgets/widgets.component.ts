import { Component, OnInit } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';
import { WidgetsService } from '@ngnx/core-data';
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
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    const newWidget = Object.assign({}, widget, { id: this.getRandomID() });
    // this.widgets$ = [...this.widgets$, newWidget];
    this.resetForm();
  }

  updateWidget(widget: Widget) {
    // this.widgets = this.widgets.map((w) => {
    //   return widget.id === w.id ? widget : w;
    // });
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    // this.widgets = this.widgets.filter((w) => widget.id !== w.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
