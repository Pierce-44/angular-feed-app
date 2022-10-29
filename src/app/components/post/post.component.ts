import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  post!: post;

  @Input()
  thumbnail: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}
}
