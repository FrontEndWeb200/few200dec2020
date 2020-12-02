import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftEntryComponent } from './components/gift-entry/gift-entry.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftEntryComponent,
    GiftListComponent,
    GiftGivingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
