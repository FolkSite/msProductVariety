<option value="{$id}" 
        data-varietynew="{$new}" 
        data-varietypopular="{$popular}" 
        data-varietybalances="{$balances}" 
        data-varietyimg="{$thumb}" 
        data-varietyprice="{$price}" 
        data-varietyoldprice="{$old_price}"
        {if '' | resource : 'template' == 43} data-varietyurl="{'' | resource : 'uri'}"{/if}>
    {$weight}
</option>