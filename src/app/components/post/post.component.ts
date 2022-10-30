import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/app.component';
import { comment } from '../post-thumbnail/post-thumbnail.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input()
  post!: post;

  @Input()
  thumbnail: boolean | undefined;

  @Input() timeSincePost: number | undefined;

  @Input() postComments: comment[] | undefined;

  @Input() openPost: boolean | undefined;
  @Output() openPostChange = new EventEmitter<boolean>();

  closePost() {
    this.openPostChange.emit(!this.openPost);
  }

  randomColor = Math.floor(Math.random() * 16777215);

  constructor() {}
}
