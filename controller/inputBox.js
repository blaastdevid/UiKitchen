var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		var self = this;
		self.get('preview').value('InputBox Preview');
		
		self.selection = self.keySelectionWithItems([
                    self.get('preview'),
		    self.get('config').get('conf-0').get('tvBackColor'),
		    self.get('config').get('conf-1').get('tvColor'),
		    self.get('config').get('conf-2').get('tvFontSize'),
		    self.get('config').get('conf-3').get('tvFontWeight')
		], {
			focusedCallback: function(item){}
		});
	},

	':keypress': function(key) {
		var self = this;
		var index = 0;
		
		if(key === 'fire'){
			index = self.selection.selected;
			if(index === 0){
				self.get('preview').emit('keypress', key);
			}
		}
		if(key === 'left' || key === 'right'){
			index = self.selection.selected;
			
			if(index === 1){
				if(self.get('config').get('conf-0').get('tvBackColor').label() === 'white'){
					self.get('config').get('conf-0').get('tvBackColor').label('red');
					self.get('preview').style({ 'background-color': 'red'});
				}else{
					self.get('config').get('conf-0').get('tvBackColor').label('white');
					self.get('preview').style({ 'background-color': 'white'});
				}
			}else if(index === 2){
				if(self.get('config').get('conf-1').get('tvColor').label() === 'black'){
					self.get('config').get('conf-1').get('tvColor').label('yellow');
					self.get('preview').style({ 'color': 'yellow'});
				}else{
					self.get('config').get('conf-1').get('tvColor').label('black');
					self.get('preview').style({ 'color': 'black'});
				}
			}else if(index === 3){
				if(self.get('config').get('conf-2').get('tvFontSize').label() === 'medium'){
					self.get('config').get('conf-2').get('tvFontSize').label('large');
					self.get('preview').style({ 'font-size': 'large' });
				}else if(self.get('config').get('conf-2').get('tvFontSize').label() === 'large'){
					self.get('config').get('conf-2').get('tvFontSize').label('small');
					self.get('preview').style({ 'font-size': 'small' });
				}
				else if(self.get('config').get('conf-2').get('tvFontSize').label() === 'small'){
					self.get('config').get('conf-2').get('tvFontSize').label('medium');
					self.get('preview').style({ 'font-size': 'medium' });
				}
			}
			else if(index === 4){
				if(self.get('config').get('conf-3').get('tvFontWeight').label() === 'normal'){
					self.get('config').get('conf-3').get('tvFontWeight').label('bold');
					self.get('preview').style({ 'font-weight': 'bold'});
				}else{
					self.get('config').get('conf-3').get('tvFontWeight').label('normal');
					self.get('preview').style({ 'font-weight': 'normal'});
				}
			}
		}
	}
});