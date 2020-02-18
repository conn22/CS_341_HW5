//James Conn

var fs = require('fs');

test('test selectEvent', () => {
	//Read index.html file into a string
	var html = fs.readFileSync('public/index.html', 'utf8');
	expect(html).toEqual(expect.anything());

	//Check heading of html doc
	document.body.innerHTML = html;
		//Note: test fails because jest cannot find the module for 'jquery'
	const $ = require('jquery');
	expect($('h1').html()).toBe("Cheesecake Order Form");
});
