import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemainderComponent } from './remainder/remainder.component';
import { RemainderListComponent } from './remainder-list/remainder-list.component';
import { AddRemainderComponent } from './add-remainder/add-remainder.component';

@NgModule({
  declarations: [
    AppComponent,
    RemainderComponent,
    RemainderListComponent,
    AddRemainderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
