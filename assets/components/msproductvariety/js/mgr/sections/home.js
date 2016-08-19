Ext.ComponentMgr.onAvailable('minishop2-product-settings-panel', function() {
    this.on('beforerender', function() {
        var option = this.items.items[0].items.items[0].items.items[0];
        option.items.insert(4, 'msproductvariety-panel-home', new msProductVariety.panel.Home());
    });
});
