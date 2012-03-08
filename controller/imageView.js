var _ = require('common/util');
var img = 'logo.png';

_.extend(exports, {
    ':load': function() {
        var self = this;
        self.get('preview').setSrc(app.imageURL(img));
    },
    
    ':keypress': function(key){
        var self = this;
        if(key === 'left'){
            if(img === 'logo.png'){
                img = 'blaastuikitchen.png';
                self.get('preview').setSrc(app.imageURL(img));
            }else{
                img = 'logo.png';
                self.get('preview').setSrc(app.imageURL(img));
            }
        }else if(key === 'right'){
            if(img === 'logo.png'){
                img = 'blaastuikitchen.png';
                self.get('preview').setSrc(app.imageURL(img));
            }else{
                img = 'logo.png';
                self.get('preview').setSrc(app.imageURL(img));
            }
        }
    }
});
