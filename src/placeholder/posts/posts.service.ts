import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpService) {}

  getAll(): Observable<AxiosResponse<any>> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(res => res.data));
  }

  getOne(postID: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .pipe(map(res => res.data));
  }
}
