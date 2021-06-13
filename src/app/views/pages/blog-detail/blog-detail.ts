export class BlogDetailPageComponent {
	constructor() {
		console.log('blog-detail page component');
	}
	static init() {
		const BlogDetail = new BlogDetailPageComponent();
		return BlogDetail;
	}
}
(function() {
	BlogDetailPageComponent.init()
})();