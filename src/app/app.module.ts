import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MyServService } from './my-serv.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'search', component:  SearchComponent},
  {path: 'user', component:  UserComponent},
  {path: 'home', component:  HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [MyServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
