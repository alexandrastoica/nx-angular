import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@ngnx/core-data';
import { UiToolbarModule } from '@ngnx/ui-toolbar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, HttpClientModule, UiToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
