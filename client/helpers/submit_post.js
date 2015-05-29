Template.submit_post.events ({

	'submit form' : function (e) {

		e.preventDefault();

		Posts.insert({

			title : $(e.target).find('[name=post-title]').val(),
			body : $(e.target).find('[name=post-body]').val(),
			img : $(e.target).find('[name=post-img]').val(),
			tags : $(e.target).find('[name=post-tags]').val(), 
			score : 0,
			author : Meteor.user().username

		});

		window.location = "/";

		return false;

	}

});