import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/ArticleService';
import {Article} from '../model/Article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticle: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
        data => {
          this.listArticle = data;
        }
    );
  }

}
