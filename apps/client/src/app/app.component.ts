import { Component, OnInit } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';
import { WidgetsService } from '@ngnx/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngnx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets$ = this.widgetsService.all();
  }
}
