import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PostThumbnailComponent } from './components/post-thumbnail/post-thumbnail.component';
import { SuggestionTabComponent } from './components/suggestion-tab/suggestion-tab.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostThumbnailComponent, SuggestionTabComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
