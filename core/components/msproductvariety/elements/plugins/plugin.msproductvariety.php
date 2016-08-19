<?php
if (!$msProductVariety = $modx->getService('msproductvariety', 'msProductVariety',
    $modx->getOption('msproductvariety_core_path', null, $modx->getOption('core_path')
        . 'components/msproductvariety/') 
        . 'model/msproductvariety/', $scriptProperties))
    return;

if ($modx->event->name == 'OnDocFormPrerender') {
    if ($mode != 'upd')
        return;
    if (!$modx->getObject('msProduct', $id) || $resource->template == 0)
        return;
    
    //$modx->controller->addLexiconTopic('msproductvariety:default, msproductvariety:manager');
    
    $modx->controller->addCss($msProductVariety->config['cssUrl'] . 'mgr/main.css');
    $modx->controller->addCss($msProductVariety->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
    
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/msproductvariety.js');
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/misc/combo.js');
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/widgets/product.grid.js');
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/widgets/product.windows.js');
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/widgets/home.panel.js');
    $modx->controller->addJavascript($msProductVariety->config['jsUrl'] . 'mgr/sections/home.js');
    
    $modx->controller->addHtml('<script type="text/javascript">
        msProductVariety.config = {
            connector_url : "' . $msProductVariety->config['connectorUrl'] . '"
            ,id : ' . $id . '
        }
        </script>
    ');
}