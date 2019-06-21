import { Component, OnInit } from '@angular/core';
import {Post} from '../model/Post.model';
import {PostService} from '../service/PostService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  listPost: Post[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
        data => {
          this.listPost = data;
        }
    );
  }
  approve(id: number) {
    this.postService.approveposts(id).subscribe((res) => {
      console.log(res);
      this.getList();
    });
  }
  destroy(id: number) {
    this.postService.destroy(id).subscribe((res) => {
      console.log(res);
      return this.getList();
    });
  }
  getList() {
    this.postService.getPosts().subscribe(
        data => {
          this.listPost = data;

        }
    );
  }
}
