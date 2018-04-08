import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import {GithubService} from './github/github.service';


@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
