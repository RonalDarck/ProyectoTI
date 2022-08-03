/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/admin/dashboard'
    },
    {
        id   : 'Prueba',
        title: 'Prueba',
        type : 'collapsable',
        icon : 'mat_outline:home_work',
        children: [
            {
                id   : 'prueba.lista',
                title: 'Lista de pruebas',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/admin/prueba/lista-prueba'
            },
           
         
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
