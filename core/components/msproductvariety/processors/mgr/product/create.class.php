<?php

require_once MODX_CORE_PATH.'model/modx/modprocessor.class.php';
require_once MODX_CORE_PATH.'model/modx/processors/resource/create.class.php';

class msProductVarietyCreateProcessor extends modResourceCreateProcessor {
	public $classKey = 'msProduct';
	public $languageTopics = array('msproductvariety');
	public $permission = 'msproduct_save';
	public $beforeSaveEvent = 'OnBeforeDocFormSave';
	public $afterSaveEvent = 'OnDocFormSave';
	/* @var msProduct $object */
	public $object;
    
    /**
     * 
     * @return type
     */
    public function preparePageTitle() {
        $pageTitle = $this->getProperty('pagetitle','');
        $parent = $this->getProperty('parent');
        
        if ($this->modx->getCount($this->classKey, array('pagetitle' => $pageTitle, 'parent' => $parent))) {
            return $this->modx->error->addField('pagetitle', 'Такой объём уже существует');
        }
        
        return parent::preparePageTitle();
    }
    
    /**
     * 
     * @return type
     */
	public function beforeSet() {
		$this->setDefaultProperties(array(
			'show_in_tree' => $this->modx->getOption('ms2_product_show_in_tree_default', null, false),
			'hidemenu' => $this->modx->getOption('hidemenu_default', null, true),
			'source' => $this->modx->getOption('ms2_product_source_default', null, 1),
			'template' => 0,
            'alias' => time(),
            'class_key' => 'msProduct',
            'published' => true,
            'searchable' => false,
            'hidemenu' => true,
		));

		return parent::beforeSet();
	}


	/**
     * 
     * @return type
     */
	public function beforeSave() {
		$this->object->set('isfolder', 0);
        
		return parent::beforeSave();
	}


	/**
     * 
     * @return type
     */
	public function afterSave() {
        $row = $this->modx->newObject('msProductData');
        $row->fromArray(array(
            'id' => $this->object->id,
            'weight' => $this->object->pagetitle,
            'article' => $this->object->article,
            'price' => $this->object->price,
            'old_price' => $this->object->old_price,
            'balances' => $this->object->balances,
            'new' => $this->object->new,
            'popular' => $this->object->popular,
            'source' => 2,
        ));
        $row->save();
        
		return parent::afterSave();
	}
}

return 'msProductVarietyCreateProcessor';