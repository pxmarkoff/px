import './navigation.sass';

import * as React from 'react';

import routes from '@/data/routes';
import toggleModifier from '@/utils/toggleModifier';

import { NavLink } from 'react-router-dom';
import { PropsUI } from './types';

const NavigationItemClassname = (name: string, navigationSelected: string) =>
  toggleModifier(name === navigationSelected, 'navigation__item', 'selected');

function NavigationUI({ navigationSelected, onFollowingLink }: PropsUI) {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        {routes.map(({ name, route }) => (
          <li
            className={NavigationItemClassname(name, navigationSelected)}
            key={name}
            onClick={onFollowingLink(name)}
          >
            <NavLink to={route}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(NavigationUI);
