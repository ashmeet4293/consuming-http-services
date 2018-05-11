import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { AppErrorHandler } from './common/app-error-hanlder';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule


  ],
  providers: [PostService,{
    provide : ErrorHandler,
    useClass : AppErrorHandler
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
