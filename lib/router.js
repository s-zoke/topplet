Router.route('/', function () {
  this.render('topplet');
});

Router.route('/submit', function () {
	this.render('submit_post');
});

Router.route('/t/:tag', {
	name : 'tp_page',
	data : function () {
		if (this.params.tag !== 'all') {
			var return_data = {
				filtered_posts : Posts.find({'tags' : this.params.tag}),
				tag_ : '#' + this.params.tag
			}
		} else {
			var return_data = {
				filtered_posts : Posts.find(),
				tag_ : '#' + this.params.tag
			}
		}
		return return_data;
	}
})