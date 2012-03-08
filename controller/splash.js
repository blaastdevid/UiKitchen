var _ = require('common/util');

_.extend(exports, {
    ':load': function() {
        this.get('img').setSrc(app.imageURL('blaastuikitchen.png'));
        setTimeout(function(){ app.pushView({ view: 'main', replace: 'current' }); }, 2000);
    }
});
