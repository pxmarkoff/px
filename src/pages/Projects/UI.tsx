import './projects.sass';

import * as React from 'react';

import Slider from '@/components/Slider';

function ProjectsUI() {
  return (
    <div className='projects'>
      <Slider />
    </div>
  );
}

export default React.memo(ProjectsUI);
