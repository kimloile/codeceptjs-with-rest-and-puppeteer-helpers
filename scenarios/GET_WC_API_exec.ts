// export { };
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const { I } = inject();
// const wcApiPrefix = 'wc/v2/'

// Feature('GET Woocommerce Endpoints Call');

// Scenario('Verify success call for Woocommerce Endpoints', async () => {
// 	const endpointWCParams = [
// 		'products',
// 		'orders',
// 		'coupons',
// 		'reports',
// 		'customers',
// 		'webhooks'
// 	];

// 	var i: any;
// 	for (i = 0; i < endpointWCParams.length; ++i) {
// 		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// 		const res = await I.sendGetRequest(wcApiPrefix + endpointWCParams[i]);
// 		console.log(wcApiPrefix + endpointWCParams[i])
// 		I.assertEqual(res.headers['content-type'], 'application/json; charset=UTF-8');
// 		I.assertEqual(res.status, 200);
// 	}
// });
