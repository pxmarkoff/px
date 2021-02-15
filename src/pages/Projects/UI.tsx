import './projects.sass';

import * as React from 'react';

import Slide from '@/components/Slide';
import Slider from '@/components/Slider';

function ProjectsUI() {
  return (
    <div className='projects'>
      {/* <h1 className='projects__title'>Projects</h1> */}
      {/* <h2 className='projects__subtitle'>Here will soon be a my projects</h2> */}
      {/* <Slide /> */}
      <Slider />
    </div>
  );
}

export default React.memo(ProjectsUI);
