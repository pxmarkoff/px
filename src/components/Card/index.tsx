import * as React from 'react';

import CardUI from './UI';

import { Props } from './types';

function Card({ isAnimation, project }: Props) {
  return <CardUI isAnimation={isAnimation} project={project} />;
}

export default Card;
