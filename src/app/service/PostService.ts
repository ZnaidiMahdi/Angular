import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {
    }
    getPosts(): Observable<any> {
        return this.http.get('http://localhost/lsapp/public/api/posts');
    }

    approveposts(id: number) {
        return this.http.get('http://localhost/lsapp/public/api/post/approve/' + id);
    }
    destroy(id: number) {
        return this.http.delete('http://localhost/lsapp/public/api/post/delete/' + id);
    }
}
