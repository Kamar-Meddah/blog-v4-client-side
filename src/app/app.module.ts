// ------------------ Modules ------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { PostsModule } from './modules/guest/posts.module';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//  ----------------- Components ---------------
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//  --------------- Services -------------------
import { UsersService } from './services/users.service';

//  -----------------
const ROUTES: Routes = [
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
  BrowserModule,
  PostsModule,
  RouterModule.forRoot(
  ROUTES
  ),
  HttpClientModule,
  BrowserAnimationsModule,
  FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
