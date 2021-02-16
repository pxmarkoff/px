import './filter.sass';

import * as React from 'react';

import keywords from '@/data/keywords';
import toggleModifier from '@/utils/toggleModifier';

import { PropsUI } from './types';
import { motion } from 'framer-motion';

const FilterUnderlineAnimation = (
  underlinePos: number,
  underlineWidth: number
) => {
  return {
    animate: {
      x: underlinePos,
      width: `${underlineWidth}px`,
    },
    transition: {
      duration: 0.35,
    },
  };
};

const FilterItemClassname = (keyword: string, filterSelected: string) =>
  toggleModifier(keyword === filterSelected, 'filter__item', 'selected');

function FilterUI({
  filterSelected,
  isFilterOnPage,
  onTapFilter,
  underlinePos,
  underlineWidth,
}: PropsUI) {
  return isFilterOnPage ? (
    <div className='filter'>
      <motion.div
        className='filter__underline'
        {...FilterUnderlineAnimation(underlinePos, underlineWidth)}
      />
      <ul className='filter__list'>
        {keywords.map((keyword) => (
          <li
            className={FilterItemClassname(keyword, filterSelected)}
            id={`filter-${keyword}`}
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
