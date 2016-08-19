<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var msProductVariety $msProductVariety */
$msProductVariety = $modx->getService('msproductvariety', 'msProductVariety', $modx->getOption('msproductvariety_core_path', null,
        $modx->getOption('core_path') . 'components/msproductvariety/') . 'model/msproductvariety/'
);
$modx->lexicon->load('msproductvariety:default');

// handle request
$corePath = $modx->getOption('msproductvariety_core_path', null, $modx->getOption('core_path') . 'components/msproductvariety/');
$path = $modx->getOption('processorsPath', $msProductVariety->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));