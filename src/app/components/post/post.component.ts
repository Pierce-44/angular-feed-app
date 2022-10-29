import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/app.component';
import { comment } from '../post-thumbnail/post-thumbnail.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
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
    console.log(this.openPost);
  }

  randomColor = Math.floor(Math.random() * 16777215);

  constructor() {}
}
