import * as React from 'react';

import withConnect from '@/hoc/withConnect';
import SliderContainerUI from './UI';
import projects from '@/data/projects';

import { DispatchProps, Props, StateProps } from './types';

function SliderContainer({ filterSelected, setEndPos }: Props) {
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

  React.useEffect(() => setEndPos(filteredProjects.length - 1), [
    filteredProjects,
  ]);

  return (
    <SliderContainerUI
      filteredProjects={filteredProjects}
      filterSelected={filterSelected}
    />
  );
}

export default withConnect<{}, StateProps, DispatchProps>(
  SliderContainer,
  [{ filter: 'filterSelected' }],
  ['slider']
);
