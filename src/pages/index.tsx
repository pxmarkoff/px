import * as React from 'react';

import { Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import routes from '@/data/routes';

const RouteTransitionAnimation = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function Routes() {
  const location = useLocation();

  const Route = routes.find(({ route }) => route === location.pathname)
    .Component;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div key={location.pathname} {...RouteTransitionAnimation}>
        <Switch location={location}>
          <Route />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

export default Routes;
