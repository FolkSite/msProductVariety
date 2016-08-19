msProductVariety.combo.New = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: new Ext.data.ArrayStore({
            id: 0
            ,fields: ['new','display']
            ,data: [
			['0', 'Нет'],
			['1', 'Да']
		]
        }),
        mode: 'local',
        displayField: 'display',
        valueField: 'new',
	triggerAction: 'all',
        editable: false,
        selectOnFocus: false,
        preventRender: true,
        forceSelection: true,
        enableKeyEvents: true
    });
    msProductVariety.combo.New.superclass.constructor.call(this, config);
};
Ext.extend(msProductVariety.combo.New,MODx.combo.ComboBox);
Ext.reg('msproductvariety-combo-new',msProductVariety.combo.New);


msProductVariety.combo.Popular = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: new Ext.data.ArrayStore({
            id: 0
            ,fields: ['popular','display']
            ,data: [
			['0', 'Нет'],
			['1', 'Да']
		]
        }),
        mode: 'local',
        displayField: 'display',
        valueField: 'popular',
	triggerAction: 'all',
        editable: false,
        selectOnFocus: false,
        preventRender: true,
        forceSelection: true,
        enableKeyEvents: true
    });
    msProductVariety.combo.Popular.superclass.constructor.call(this, config);
};
Ext.extend(msProductVariety.combo.Popular,MODx.combo.ComboBox);
Ext.reg('msproductvariety-combo-popular',msProductVariety.combo.Popular);
