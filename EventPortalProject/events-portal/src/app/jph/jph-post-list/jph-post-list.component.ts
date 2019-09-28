import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post";
import {JphService} from "../services/jph.service"

@Component({
  selector: 'jph-post-list',
  templateUrl: './jph-post-list.component.html',
  styleUrls: ['./jph-post-list.component.css']
})
export class JphPostListComponent implements OnInit {

  constructor(private _jphService:JphService) { }

  title:string="Json Placeholder Post List";
  posts:Post[]=[];

  ngOnInit() {
  this._jphService.getAllJphPosts().subscribe(
    data=>this.posts=data,
    error=>console.log(error)
  );
  
  }

}
