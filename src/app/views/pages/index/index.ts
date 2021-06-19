import { FormItemSelect } from '@/components/form-item/form-item-select';

export class IndexComponent {

	formCustomSelect!: FormItemSelect;
	categoryCustomSelect!: FormItemSelect;

	constructor() {
		this.handleCustomSelect();
	}

	handleCustomSelect() {
		this.formCustomSelect = new FormItemSelect('.form-item__select .js-select', {wrapper: 'custom-select-wrapper'});
		this.categoryCustomSelect = new FormItemSelect('.form-item__category .js-select', {wrapper: 'custom-select-wrapper'});
	}

	static init() {
		const index = new IndexComponent();
		return index;
	}
}
(function () {
	IndexComponent.init();
})();
