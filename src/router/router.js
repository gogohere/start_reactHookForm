import { lazy } from 'react';

export const commonRouter = [
    {
        path: '/demo1',
        name: 'demo1',
        component: lazy(() => import('../pages/Demo1'))
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: lazy(() => import('../pages/Demo2'))
    },
]