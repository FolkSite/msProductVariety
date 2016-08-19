var msProductVariety = function (config) {
    config = config || {};
    msProductVariety.superclass.constructor.call(this, config);
};
Ext.extend(msProductVariety, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('msproductvariety', msProductVariety);

msProductVariety = new msProductVariety();