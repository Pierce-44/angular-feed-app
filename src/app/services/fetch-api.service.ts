import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchAPIService {
  constructor(private http: HttpClient) {}

  getPosts(url: any) {
    return this.http.get(url);
  }
}
