export class Post {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public is_approved: boolean,
    ) {}
}
