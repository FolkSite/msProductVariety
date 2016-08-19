msProductVariety.grid.Products = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msproductvariety-grid-products';
    }
    Ext.applyIf(config, {
        url: msProductVariety.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        save_action: 'mgr/product/updatefromgrid',
        autosave: true,
        preventSaveRefresh: false,
        //sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/product/getlist',
            parent: msProductVariety.config.id
        },
        
        autoHeight: true,
    });
    msProductVariety.grid.Products.superclass.constructor.call(this, config);

};
Ext.extend(msProductVariety.grid.Products, MODx.grid.Grid, {
    windows: {},

    createItem: function (btn, e) {
        var w = MODx.load({
            xtype: 'msproductvariety-product-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    getFields: function () {
        return ['id', 'pagetitle', 'article', 'price', 'old_price', 'balances', 'new', 'popular', 'parent'];
    },

    getColumns: function () {
        return [{
            header: 'id',
            dataIndex: 'id',
            sortable: true,
            hidden: true
        }, {
            header: 'Объём',
            dataIndex: 'pagetitle',
            sortable: true,
            renderer: function(val, cell, row){return '<a href="index.php?a=resource/update&id=' + row.id + '">' + val + '</a>';},
            editor: {xtype: 'numberfield'}
        }, {
            header: 'Артикул',
            dataIndex: 'article',
            sortable: false,
            editor: {xtype: 'textfield'}
        }, {
            header: 'Цена',
            dataindex: 'price',
            sortable: false,
            editor: {xtype: 'numberfield'}
        }, {
            header: 'Старая цена',
            dataIndex: 'old_price',
            sortable: false,
            editor: {xtype: 'numberfield'}
        }, {
            header: 'Остатки',
            dataindex: 'balances',
            sortable: false,
            editor: {xtype: 'numberfield'}
        }, {
            header: 'Новый',
            dataIndex: 'new',
            sortable: false,
            editor: { xtype: 'msproductvariety-combo-new',renderer: true }
        }, {
            header: 'Акция',
            dataindex: 'popular',
            sortable: false,
            editor: { xtype: 'msproductvariety-combo-popular',renderer: true }
        },{
            header: 'Родитель',
            dataindex: 'parent',
            sortable: false,
            hidden: true
        }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;Добавить объём',
            handler: this.createItem,
            scope: this
        }];
    },
});
Ext.reg('msproductvariety-grid-products', msProductVariety.grid.Products);
