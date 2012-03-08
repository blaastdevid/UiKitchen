var _ = require('common/util');

_.extend(exports, {
    ':load': function() {
        var self = this;
        
        self.selection = self.keySelectionWithItems([
            self.get('config').get('conf-0').get('tvBackColor'),
            self.get('config').get('conf-1').get('tvFontSize'),
            self.get('config').get('conf-2').get('tvFontWeight'),
            self.get('config').get('conf-3').get('tvAlign'),
            self.get('config').get('conf-4').get('tvColor')
            ],
            { focusedCallback: function(item){
                self.get('config').scrollTo(item);
            }
        });
    },

    ':keypress': function(key) {
        var self = this;
        var index = 0;
        
        if(key === 'left' || key === 'right'){
            index = self.selection.selected;
            
            if(index === 0){
                if(self.get('config').get('conf-0').get('tvBackColor').label() === 'white'){
                    self.get('config').get('conf-0').get('tvBackColor').label('red');
                    self.get('preview').style({ 'background-color': 'red'});
                }else{
                    self.get('config').get('conf-0').get('tvBackColor').label('white');
                    self.get('preview').style({ 'background-color': 'white'});
                }
            }else if(index === 1){
                if(self.get('config').get('conf-1').get('tvFontSize').label() === 'medium'){
                    self.get('config').get('conf-1').get('tvFontSize').label('large');
                    self.get('preview').style({ 'font-size': 'large' });
                }else if(self.get('config').get('conf-1').get('tvFontSize').label() === 'large'){
                    self.get('config').get('conf-1').get('tvFontSize').label('small');
                    self.get('preview').style({ 'font-size': 'small' });
                }
                else if(self.get('config').get('conf-1').get('tvFontSize').label() === 'small'){
                    self.get('config').get('conf-1').get('tvFontSize').label('medium');
                    self.get('preview').style({ 'font-size': 'medium' });
                }
            }else if(index === 2){
                if(self.get('config').get('conf-2').get('tvFontWeight').label() === 'normal'){
                    self.get('config').get('conf-2').get('tvFontWeight').label('bold');
                    self.get('preview').style({ 'font-weight': 'bold'});
                }else{
                    self.get('config').get('conf-2').get('tvFontWeight').label('normal');
                    self.get('preview').style({ 'font-weight': 'normal'});
                }
            }else if(index === 3){
                if(self.get('config').get('conf-3').get('tvAlign').label() === 'center'){
                    self.get('config').get('conf-3').get('tvAlign').label('right');
                    self.get('preview').style({ 'align': 'right' });
                }else if(self.get('config').get('conf-3').get('tvAlign').label() === 'right'){
                    self.get('config').get('conf-3').get('tvAlign').label('left');
                    self.get('preview').style({ 'align': 'left' });
                }
                else if(self.get('config').get('conf-3').get('tvAlign').label() === 'left'){
                    self.get('config').get('conf-3').get('tvAlign').label('center');
                    self.get('preview').style({ 'align': 'center' });
                }
            }else if(index === 4){
                if(self.get('config').get('conf-4').get('tvColor').label() === 'black'){
                    self.get('config').get('conf-4').get('tvColor').label('yellow');
                    self.get('preview').style({ 'color': 'yellow'});
                }else{
                    self.get('config').get('conf-4').get('tvColor').label('black');
                    self.get('preview').style({ 'color': 'black'});
                }
            }
        }
    }
});