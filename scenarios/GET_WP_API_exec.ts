export { };
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { I } = inject();
const wpApiPrefix = 'wp/v2/'

Feature('GET Wordpress Endpoints Call');

Scenario('Verify success call for Wordpress Endpoints', async () => {
	const endpointWPParams = [
		'posts',
		'categories',
		'tags',
		'pages',
		'comments',
		'taxonomies',
		'media',
		'users',
		'types',
		'statuses',
		'search',
	];

	var i: any;
	for (i = 0; i < endpointWPParams.length; ++i) {
		const res = await I.sendGetRequest(wpApiPrefix + endpointWPParams[i]);
		console.log(wpApiPrefix + endpointWPParams[i])
		I.assertEqual(res.headers['content-type'], 'application/json; charset=UTF-8');
		I.assertEqual(res.status, 200);
	}
});

