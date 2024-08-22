import { PATH_ROUTES } from '@/shared/utils/constants';

import { Link } from 'react-router-dom';
import React from 'react';

export const ListRoutes: React.FC = () => {
  return PATH_ROUTES.map((route) => (
    <Link
      className={`${
        location.pathname === route.path ? 'text-sky-500' : 'text-slate-700 dark:text-slate-500'
      }
        text-2xl hover:text-sky-500 transition hover:animate-bounce duration-700
        `}
      to={route.path}
      key={route.path}
    >
      {route.label}
    </Link>
  ));
};
