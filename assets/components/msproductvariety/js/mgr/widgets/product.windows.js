msProductVariety.window.CreateProduct= function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msproductvariety-product-window-create';
    }
    Ext.applyIf(config, {
        title: 'Добавить объём',
        width: 550,
        autoHeight: true,
        url: msProductVariety.config.connector_url,
        action: 'mgr/product/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    
    msProductVariety.window.CreateProduct.superclass.constructor.call(this, config);
};
Ext.extend(msProductVariety.window.CreateProduct, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'numberfield',
            fieldLabel: 'Объём',
            name: 'pagetitle',
            id: config.id + '-pagetitle',
            anchor: '99%',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Артикул',
            name: 'article',
            id: config.id + '-article',
            anchor: '99%'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            id: config.id + '-price',
            anchor: '99%'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Старая цена',
            name: 'old_price',
            id: config.id + '-old_price',
            anchor: '99%'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Остатки',
            name: 'balances',
            id: config.id + '-balances',
            anchor: '99%'
        }, {
            xtype: 'hidden'
            ,name: 'parent'
            ,originalValue: msProductVariety.config.id
        }, {
            xtype: 'xcheckbox',
            boxLabel: 'Новый',
            name: 'new',
            id: config.id + '-new',
            checked: false,
        }, {
            xtype: 'xcheckbox',
            boxLabel: 'Акция',
            name: 'popular',
            id: config.id + '-popular',
            checked: false,
        }];
    },
});

Ext.reg('msproductvariety-product-window-create', msProductVariety.window.CreateProduct);
