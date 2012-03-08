var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		var self = this;
		self.get('header').get('imgLogo').setSrc(app.imageURL('logo.png'));
		
		self.selection = self.keySelectionWithItems([
			self.get('tvTextView'),
			self.get('tvInputBox'),
			self.get('tvImageView')
		], {
			focusedCallback: function(item){}
		});
	},

	':keypress': function(key) {
		var self = this;
		if(key === 'fire'){
			var index = self.selection.selected;
			
			if(index === 0){
				app.pushView({ view: 'textView' });
			}else if(index === 1){
				app.pushView({ view: 'inputBox' });
			}else if(index === 2){
				app.pushView({ view: 'imageView' });
			}
		}
	}
});