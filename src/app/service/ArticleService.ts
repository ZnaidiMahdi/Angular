import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {
    }
    getArticles(): Observable<any> {
        return this.http.get('http://localhost/lsapp/public/article');
    }
}
