export class DetailDescriptionPageComponent {
	constructor() {
		console.log('detail-description page component');
	}
	static init() {
		const DetailDescription = new DetailDescriptionPageComponent();
		return DetailDescription;
	}
}
(function() {
	DetailDescriptionPageComponent.init()
})();