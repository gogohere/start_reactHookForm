import { lazy } from 'react';

export const commonRouter = [
    {
        path: '/demo1',
        name: 'demo1',
        component: lazy(() => import('../pages/Demo1'))
    }
]