export class BlogPageComponent {
	constructor() {
		console.log('blog page component');
	}
	static init() {
		const Blog = new BlogPageComponent();
		return Blog;
	}
}
(function() {
	BlogPageComponent.init()
})();