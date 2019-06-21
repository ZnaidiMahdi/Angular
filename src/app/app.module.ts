import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import { routing } from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ArticleService} from './service/ArticleService';
import { ArticleComponent } from './article/article.component';
import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './post/post.component';
import {PostService} from './service/PostService';


const appRoutes: Routes = [
  {path: 'articles' , component: ArticleComponent},
  {path: '', component: HomeComponent },
  {path: 'posts', component: PostComponent },
  {path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ArticleComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    routing,
    FormsModule,
  ],
  providers: [
      ArticleService,
      PostService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
