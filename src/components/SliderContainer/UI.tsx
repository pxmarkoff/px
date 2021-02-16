import { motion } from 'framer-motion';
import * as React from 'react';

import Slide from '../Slide';

import { PropsUI } from './types';

function SliderContainerUI({ filteredProjects, filterSelected }: PropsUI) {
  return (
    <motion.section
      animate={{ opacity: [0, 1] }}
      key={filterSelected}
      id='slides'
      transition={{ duration: 0.75, ease: [0.11, 0, 0.5, 0] }}
    >
      {filteredProjects.map((project, i) => (
        <Slide index={i} key={project.title + i} {...project} />
      ))}
    </motion.section>
  );
}

export default React.memo(SliderContainerUI);
