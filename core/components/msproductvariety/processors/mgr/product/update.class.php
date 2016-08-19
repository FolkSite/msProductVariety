<?php

class msProductVarietyProductUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'msProductVariety';
    public $classKey = 'msProduct';
    public $languageTopics = array('msproductvariety');
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $parent = $this->getProperty('parent');
        $pagetitle = trim($this->getProperty('pagetitle'));
        if (empty($id)) {
            
            return 'Объём не указан';
        }

        if (empty($pagetitle)) {
            $this->modx->error->addField('pagetitle', 'Вы должны указать объём.');
        } elseif ($this->modx->getCount($this->classKey, array('pagetitle' => $pagetitle, 'id:!=' => $id, 'parent' => $parent))) {
            $this->modx->error->addField('pagetitle', 'Такой объём уже существует');
        }
        
        return parent::beforeSet();
    }
}

return 'msProductVarietyProductUpdateProcessor';
