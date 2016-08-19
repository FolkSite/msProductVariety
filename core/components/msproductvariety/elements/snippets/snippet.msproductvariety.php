<?php

$q = $modx->newQuery('msProduct');
$q->sortby('pagetitle', 'DESC');
$q->where(array(
    'parent' => $id,
    'id' => $id,
),xPDOQuery::SQL_OR);
$q->where(array(
    'published' => true,
));

$row = $modx->getIterator('msProduct', $q);

$row->rewind();
if ($row->valid()) {
    $c = 0;
    foreach ($row as $val) {
        $variety = $val->toArray();
        
        if ($variety['weight']) {
            $output .= $modx->getChunk('varietyOptionTpl', $variety);
        
            $c++;
        }
    }
    
    if (empty($output)) {
        return '<div class="variety-empty"></div>';
    } elseif ($c === 1) {
        return $modx->getChunk('varietyRowTpl', $variety);
    }
}

return '<select class="variety" name="variety">' . $output . '</select>';
