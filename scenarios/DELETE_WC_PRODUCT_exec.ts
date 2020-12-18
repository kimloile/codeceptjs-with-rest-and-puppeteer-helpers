// export { };
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const { I } = inject();
// const wcApiPrefix = 'wc/v2/products';
// let createdProduct:any;

// Feature('DELETE Woocommerce Endpoint Call');

// Before(async () => {
//     createdProduct = await I.sendPostRequest(wcApiPrefix);
// });

// Scenario('Delete a product', async () => {
//     let productId = createdProduct.data.id;
//     const res = await I.sendDeleteRequest(`${wcApiPrefix}/${productId}`);
//     I.assertEqual(res.status, 200);
// });