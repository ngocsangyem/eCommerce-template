export class CheckoutPageComponent {
	constructor() {
		console.log('checkout page component');
	}
	static init() {
		const Checkout = new CheckoutPageComponent();
		return Checkout;
	}
}
(function() {
	CheckoutPageComponent.init()
})();