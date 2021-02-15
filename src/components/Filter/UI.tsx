import './filter.sass';

import * as React from 'react';

import keywords from '@/data/keywords';
import toggleModifier from '@/utils/toggleModifier';

import { PropsUI } from './types';

const FilterItemClassname = (keyword: string, filterSelected: string) =>
  toggleModifier(keyword === filterSelected, 'filter__item', 'selected');

function FilterUI({ filterSelected, isFilterOnPage, onTapFilter }: PropsUI) {
  return isFilterOnPage ? (
    <div className='filter'>
      <ul className='filter__list'>
        {keywords.map((keyword) => (
          <li
            className={FilterItemClassname(keyword, filterSelected)}
            key={keyword}
            onClick={onTapFilter(keyword)}
          >
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default React.memo(FilterUI);