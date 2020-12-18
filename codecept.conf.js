require('ts-node/register');

// Main Url to test on
const demoUrl = 'https://example.com'

// Demo product data used for Woocommerce POST/DELETE request call
const demoProductData = {
	'name': 'Premium Quality TEST 01',
	'type': 'simple',
	'regular_price': '523.99',
	'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
	'short_description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
	'images': [
		{
			'src': 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg'
		},
		{
			'src': 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg'
		}
	]
}

// Woocommerce order status to change to
const demoOrderStatus = {
	'status': 'completed'
}

// Enter your header Authentication Basic token here
const basicAuthToken = 'Basic [your_basic_auth_token]'

exports.config = {
	tests: './scenarios/*_exec.ts',
	output: './output',
	helpers: {
		REST: {
			// Enter your API Url
			endpoint: demoUrl + '/wp-json/',
			onRequest: (request) => {
				// Use for requests that required Basic Auth
					// request.headers.Authorization = basicAuthToken;

				// Use for post/delete a product of Woocommerce API call
					// request.data = demoProductData

				// Use for update order status of Woocommerce call
					// request.data = demoOrderStatus
			},
			ignoreHTTPSErrors: true,
		},
		ExpectWrapper: {
			require: './ExpectWrapper.ts'
		},
		Puppeteer: {
			url: demoUrl,
			show: false,
			windowSize: '1200x900',
			chrome: {
				"ignoreHTTPSErrors": true
			}
		},
	},
	include: {
		I: './steps_file.ts'
	},
	bootstrap: null,
	mocha: {},
	name: 'codeceptjs-rest-demo',
	plugins: {
		allure: {
			outputDir: 'report',
			enabled: true
		}
	}
};
