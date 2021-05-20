import { lazy } from 'react';

export const commonRouter = [
    {
        path: '/quickStart/demo1',
        name: 'demo1',
        component: lazy(() => import('../pages/quickStart/Demo1'))
    },
    {
        path: '/quickStart/demo2',
        name: 'demo2',
        component: lazy(() => import('../pages/quickStart/Demo2'))
    },
    {
        path: '/quickStart/demo3',
        name: 'demo3',
        component: lazy(() => import('../pages/quickStart/Demo3'))
    },
    {
        path: '/quickStart/demo4',
        name: 'demo4',
        component: lazy(() => import('../pages/quickStart/Demo4'))
    },
    {
        path: '/quickStart/demo5',
        name: 'demo5',
        component: lazy(() => import('../pages/quickStart/Demo5'))
    },
    {
        path: '/quickStart/demo6',
        name: 'demo6',
        component: lazy(() => import('../pages/quickStart/Demo6'))
    },
    {
        path: '/quickStart/demo7',
        name: 'demo7',
        component: lazy(() => import('../pages/quickStart/Demo7'))
    },
    {
        path: '/quickStart/demo8',
        name: 'demo8',
        component: lazy(() => import('../pages/quickStart/Demo8'))
    },
]