import * as React from 'react';

import withConnect from '@/hoc/withConnect';
import SliderContainerUI from './UI';
import projects from '@/data/projects';

import { Props, StateProps } from './types';

function SliderContainer({ filterSelected }: Props) {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (filterSelected === 'All') setFilteredProjects(projects);
    else
      setFilteredProjects(
        projects.filter(({ keywords }) => {
          return keywords.includes(filterSelected);
        })
      );
  }, [filterSelected]);

  return (
    <SliderContainerUI
      filteredProjects={filteredProjects}
      filterSelected={filterSelected}
    />
  );
}

export default withConnect<{}, StateProps, {}>(SliderContainer, [
  { filter: 'filterSelected' },
]);
