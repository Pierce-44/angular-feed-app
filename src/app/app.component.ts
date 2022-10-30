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
    subreddit: string;
    id: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hello world';
  community = 'todayilearned';
  posts!: post[];
  url = `https://www.reddit.com/r/${this.community}/hot.json?limit=25`;
  fetchLimit = 50;
  openClose = false;
  darkMode = false;
  filterFocus = 'hot';

  constructor(private fetchAPIService: FetchAPIService) {}

  public closeDropDown(event: any) {
    if (event.target.id === 'headerDropDown') return;
    this.openClose = false;
  }

  public setPosts(filter: string) {
    const newUrl = `https://www.reddit.com/r/${this.community}/${filter}.json?limit=25`;

    this.filterFocus = filter;
    this.fetchAPIService.getPosts(newUrl).subscribe((response: any) => {
      this.posts = response.data.children;
    });
  }

  publicFetchMorePosts() {
    this.fetchLimit = this.fetchLimit + 25;

    const newUrl = `https://www.reddit.com/r/${this.community}/${this.filterFocus}.json?limit=${this.fetchLimit}`;

    this.fetchAPIService.getPosts(newUrl).subscribe((response: any) => {
      this.posts = response.data.children;
    });
  }

  ngOnInit() {
    this.fetchAPIService.getPosts(this.url).subscribe((response: any) => {
      this.posts = response.data.children;
      console.log(response);
    });
  }
}
