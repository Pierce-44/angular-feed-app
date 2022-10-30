import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/app.component';
import { FetchAPIService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-suggestion-tab',
  templateUrl: './suggestion-tab.component.html',
})
export class SuggestionTabComponent {
  communities = [
    'ProgrammerHumor',
    'formula1',
    'worldnews',
    'space',
    'Damnthatsinteresting',
  ];

  newCommunity: string | undefined;

  @Input() posts: post[] | undefined;
  @Output() postsChange = new EventEmitter<post[]>();

  @Input() filterFocus: string | undefined;
  @Output() filterFocusChange = new EventEmitter<string>();

  @Input() community: string | undefined;
  @Output() communityChange = new EventEmitter<string>();

  @Input() fetchLimit: number | undefined;
  @Output() fetchLimitChange = new EventEmitter<number>();

  newFetch(community: string) {}

  public getNewRoomPosts(community: string) {
    const baseUrl = `https://www.reddit.com/r/${community}/hot.json?limit=25`;

    this.fetchAPIService.getPosts(baseUrl).subscribe((response: any) => {
      this.posts = response;

      this.postsChange.emit(response.data.children);
    });

    this.communityChange.emit(community);
    this.filterFocusChange.emit('hot');
    this.fetchLimitChange.emit(25);
  }

  constructor(private fetchAPIService: FetchAPIService) {}
}
