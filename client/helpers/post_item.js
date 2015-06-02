Template.post_item.events({
	'click #uplink' : function () {
		if(Meteor.user().profile.upvoted.indexOf(this._id) <= -1){
			Posts.update({_id:this._id}, {$inc: {score:1}});
			Meteor.users.update({_id:Meteor.user()._id}, {$push: {'profile.upvoted':this._id}});
	}
}});;

Template.post_item.helpers({
hasImg : function () {
	if (this.img) {
		return true;
	} else {
		return false;
	}
}
})