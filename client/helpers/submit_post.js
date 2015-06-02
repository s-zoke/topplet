Template.submit_post.events ({

	'submit form' : function (e) {

		e.preventDefault();

		Posts.insert({

			title : $(e.target).find('[name=post-title]').val(),
			body : $(e.target).find('[name=post-body]').val(),
			img : $(e.target).find('[name=post-img]').val(),
			tags : $(e.target).find('[name=post-tags]').val().split(' '), 
			score : 0,
			author : Meteor.user().username,
			date : new Date

		});

		window.location = "/";

		return false;

	}

});

Template.submit_post.events ({
	imgType : function () {
		var url = document.getElementById('#post-img');
		var filename_array = url.split('.');
		var filename = filename_array[filename_array.length-1];
		return String(filename);
	}
})