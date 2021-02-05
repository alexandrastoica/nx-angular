import { Component, OnInit } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';
import { WidgetsFacade } from '@ngnx/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngnx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }
}
