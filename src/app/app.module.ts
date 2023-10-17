import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducerStates } from './+state/reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { storeEffect } from './+state/effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ AppState: reducerStates.reducer }),
    EffectsModule.forRoot([storeEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
