import { Component } from '@angular/core';
import { FetchAPIService } from './services/fetch-api.service';

export interface post {
  data: {
    url: string;
    thumbnail: string;
    title: string;
    author: string;
    num_comments: number;
    created: number;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hello world';
  posts!: post[];
  // url = 'https://www.reddit.com/r/formula1/hot.json?limit=25';
  url = 'https://www.reddit.com/r/todayilearned/hot.json?limit=25';
  openClose = false;
  darkMode = false;

  constructor(private fetchAPIService: FetchAPIService) {}

  public closeDropDown(event: any) {
    if (event.target.id === 'headerDropDown') return;
    this.openClose = false;
  }

  public changeFetch(newUrl: string) {
    this.url = newUrl;
    this.fetchAPIService.getPosts(this.url).subscribe((response: any) => {
      this.posts = response;
      // console.log(response);
    });
  }

  ngOnInit() {
    this.fetchAPIService.getPosts(this.url).subscribe((response: any) => {
      this.posts = response.data.children;
      console.log(response.data.children);
    });
  }
}
