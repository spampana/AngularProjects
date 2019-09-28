import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post'

@Injectable()
export class JphService {

  constructor(private _httpClient:HttpClient) { }
  
 getAllJphPosts():Observable<Post[]>{
  return this._httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
 }

}
