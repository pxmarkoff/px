import useDocumentSubtitle from '@/hooks/useDocumentSubtitle';
import * as React from 'react';

import ProjectsUI from './UI';

function Projects() {
  useDocumentSubtitle('Projects');

  return <ProjectsUI />;
}

export default Projects;
