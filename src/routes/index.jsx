import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import JobCreate from '@pages/JobCreate';
import JobDetail from '@pages/JobDetail';
import NotFound from '@pages/NotFound';
import JobApplication from '@pages/JobApplication';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Login',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  // TODO: Change to true later
  {
    path: '/job/create',
    name: 'Job Create',
    protected: false,
    component: JobCreate,
    layout: MainLayout,
  },
  {
    path: '/job/:jobId',
    name: 'Job Detail',
    protected: false,
    component: JobDetail,
    layout: MainLayout,
  },
  // TODO: Change to true later
  {
    path: '/application/',
    name: 'Application List',
    protected: false,
    component: JobApplication,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
