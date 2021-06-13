export class CategoryPageComponent {
	constructor() {
		console.log('category page component');
	}
	static init() {
		const Category = new CategoryPageComponent();
		return Category;
	}
}
(function() {
	CategoryPageComponent.init()
})();