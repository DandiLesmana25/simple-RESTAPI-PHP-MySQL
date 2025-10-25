pm.test('response Content-Type header should have application/json value', () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json');


});

// status code harus 200
pm.test('response status code should have 200 value', () => {
   pm.response.to.have.status(200);
});



// response body harus object
pm.test('response body should an object', () => {
   const responseJson = pm.response.json();
}); 