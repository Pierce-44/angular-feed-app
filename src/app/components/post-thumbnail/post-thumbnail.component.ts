/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { post } from 'src/app/app.component';
import { FetchAPIService } from 'src/app/services/fetch-api.service';

interface comment {
  data: {
    body: string;
  };
}

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css'],
})
export class PostThumbnailComponent implements OnInit {
  @Input()
  post!: post;

  postComments: comment[] | undefined;
  openPost = false;

  thumbnail: boolean | undefined;
  randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  d = new Date();
  time = (this.d.getTime() - (this.d.getTime() % 1000)) / 1000;
  timeSincePost: number | undefined;

  public setPostDetails() {
    this.openPost = true;

    const id = this.post.data.id;
    const subreddit = this.post.data.subreddit;

    const postUrl = `https://www.reddit.com/r/${subreddit}/comments/${id}.json`;

    this.fetchAPIService.getPosts(postUrl).subscribe((response: any) => {
      console.log(response[0].data.children);

      this.postComments = response[1].data.children;
    });
  }

  constructor(private fetchAPIService: FetchAPIService) {}

  ngOnInit(): void {
    if (this.post.data.thumbnail.slice(0, 4) === 'http') {
      this.thumbnail = true;
    }

    this.timeSincePost = Math.trunc(
      (this.time - this.post.data.created) / 3600
    );
  }
}
