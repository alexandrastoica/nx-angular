import { Component, OnInit } from '@angular/core';
import { Widget } from '@ngnx/api-interfaces';
import { WidgetsService } from '@ngnx/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngnx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }
}
