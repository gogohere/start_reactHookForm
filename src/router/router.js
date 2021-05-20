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
    {
        path: '/demo3',
        name: 'demo3',
        component: lazy(() => import('../pages/Demo3'))
    },
    {
        path: '/demo4',
        name: 'demo4',
        component: lazy(() => import('../pages/Demo4'))
    },
    {
        path: '/demo5',
        name: 'demo5',
        component: lazy(() => import('../pages/Demo5'))
    },
    {
        path: '/demo6',
        name: 'demo6',
        component: lazy(() => import('../pages/Demo6'))
    },
]