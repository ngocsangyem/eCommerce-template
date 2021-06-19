import { FormItemSelect } from '@/components/form-item/form-item-select';

export class IndexComponent {

	customSelect!: FormItemSelect;

	constructor() {
		this.handleCustomSelect();
	}

	handleCustomSelect() {
		const customSelect = Array.from(document.querySelectorAll('.js-select .form-control-group'));
		if (customSelect.length > 0) {
			const selectArray: FormItemSelect[] = [];
			for (let i = 0; i < customSelect.length; i++) {
				this.customSelect = new FormItemSelect(<HTMLElement>customSelect[i]);
				selectArray.push(this.customSelect);
			}

			// listen for key events
			window.addEventListener('keyup', (event) => {
				if (
					(event.keyCode && event.keyCode == 27) ||
					(event.key && event.key.toLowerCase() == 'escape')
				) {
					console.log('oke');
					// close custom select on 'Esc'
					selectArray.forEach((element) => {
						element.moveFocusToSelectTrigger(); // if focus is within dropdown, move it to dropdown trigger
						element.toggleCustomSelect('false'); // close dropdown
					});
				}
			});
			// close custom select when clicking outside it
			window.addEventListener('click', (event) => {
				selectArray.forEach((element) => {
					element.checkCustomSelectClick((event.target as HTMLElement));
				});
			});
		}
	}

	static init() {
		const index = new IndexComponent();
		return index;
	}
}
(function () {
	IndexComponent.init();
})();
