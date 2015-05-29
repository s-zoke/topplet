Router.route('/', function () {
  this.render('topplet');
});

Router.route('/submit', function () {
	this.render('submit_post');
});