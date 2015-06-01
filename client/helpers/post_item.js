Template.post_item.events({
	'click #uplink' : function () {
		//
	}
});

Template.post_item.helpers({
imgType : function () {
		var url = this.img;
		var filename_array = url.split('.');
		var filename = filename_array[filename_array.length-1];
		return String(filename);
	}
})