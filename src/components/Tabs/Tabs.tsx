import React from 'react';
import { useTranslation } from 'next-i18next';

import { BUTTON } from '../../constants/general';
import Button from '../Button/Button';

import type { ITabs } from './interfaces/ITabs';

function Tabs({ tab, activeGraph, handlerChange }: ITabs) {
  const { t } = useTranslation('graphs');

  const isActive = tab.title === activeGraph;

  const activeBorder = isActive
    ? 'z-10 border-gray-300 border border-b-white'
    : 'button-transparent border-transparent hover:border-blue border border-b-transparent hover:text-blue';

  return (
    <div>
      <Button
        type={BUTTON}
        onClick={() => handlerChange(tab.title)}
        className={`button-large ${activeBorder} text-lg font-medium text-gray-500 rounded-t-lg`}
        disabled={isActive}
      >
        {t(`${tab.title}`)}
      </Button>
    </div>
  );
}

export default Tabs;
