msProductVariety.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        items: [{
            html: '<h2>Объёмы:</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            items: {
                xtype: 'msproductvariety-grid-products',
                cls: 'main-wrapper'
            }
        }]
    });
    msProductVariety.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(msProductVariety.panel.Home, MODx.Panel);
Ext.reg('msproductvariety-panel-home', msProductVariety.panel.Home);
