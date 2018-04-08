import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';


import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import {GithubService} from './github/github.service';
import {MatCardModule} from '@angular/material/card';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    MatCardModule
 
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
