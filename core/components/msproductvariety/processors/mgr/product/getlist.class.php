<?php

class msProductVarietyItemGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'msProductVariety';
    public $classKey = 'msProduct';
    public $defaultSortField = 'pagetitle';
    public $defaultSortDirection = 'ASC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $c->where(array('class_key' => 'msProduct'));
		$c->leftJoin('msProductData','Data', 'msProduct.id = Data.id');
        $c->select($this->modx->getSelectColumns('msProduct','msProduct'));
        $c->select($this->modx->getSelectColumns('msProductData','Data', '', array('id'), true));
        
		if ($query = $this->getProperty('query',null)) {
			$queryWhere = array(
				'msProduct.id' => $query,
				'OR:msProduct.pagetitle:LIKE' => '%'.$query.'%',
				'OR:Data.old_price:LIKE' => '%'.$query.'%',
				'OR:Data.price:LIKE' => '%'.$query.'%',
				'OR:Data.article:LIKE' =>  '%'.$query.'%',
				'OR:Data.made_in:LIKE' =>  '%'.$query.'%',
                'OR:Data.new:LIKE' =>  '%'.$query.'%',
                'OR:Data.popular:LIKE' =>  '%'.$query.'%',
			);
			$c->where($queryWhere);
		}
		$parent = $this->getProperty('parent');
		if (!empty($parent)) {
			$category = $this->modx->getObject('modResource', $parent);
			$this->parent = $parent;
			$parents = array($parent);
            $tmp = $this->modx->getChildIds($parent, 1);
            if ($tmp) {
                foreach ($tmp as $v) {
                    $parents[] = $v;
                }
            }
			$c->orCondition(array('parent:IN' => $parents), '', 1);
		}

        return $c;
    }
}

return 'msProductVarietyItemGetListProcessor';