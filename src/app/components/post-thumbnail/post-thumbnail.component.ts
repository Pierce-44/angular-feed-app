/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/app.component';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css'],
})
export class PostThumbnailComponent implements OnInit {
  @Input()
  post!: post;

  thumbnail: boolean | undefined;
  randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  d = new Date();
  time = (this.d.getTime() - (this.d.getTime() % 1000)) / 1000;
  timeSincePost: number | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.post.data.thumbnail.slice(0, 4) === 'http') {
      this.thumbnail = true;
    }

    this.timeSincePost = Math.trunc(
      (this.time - this.post.data.created) / 3600
    );
  }
}
