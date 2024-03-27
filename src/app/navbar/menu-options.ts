export const MenuItemFactory = [
  {
    label: 'Piezas',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'Nueva pieza',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['part'],
      },
      {
        label: 'Borrar pieza',
        icon: 'pi pi-fw pi-trash',
        routerLink: 'part',
      },
      {
        label: 'Ver piezas',
        icon: 'pi pi-fw pi-external-link',
        routerLink: 'part',
      },
    ],
  },
  {
    label: 'Mueble',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Plantilla de mueble',
        icon: 'pi pi-fw pi-wrench',
        routerLink: '/template-furniture',
      },
      {
        label: 'Ensamblar',
        icon: 'pi pi-fw pi-wrench',
        routerLink: '/assemble-furniture',
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/edit-furniture',
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-trash',
        routerLink: '/delete-furniture',
      },
      {
        label: 'Inventario',
        icon: 'pi pi-fw pi-align-justify',
        routerLink: '/summary-factory',
      },
      {
        label: 'Verificar mueble',
        icon: 'pi pi-fw pi-check',
        routerLink: '/check-furniture',
      },
    ],
  },

  {
    label: 'Salir',
    icon: 'pi pi-fw pi-power-off',
    routerLink: '/logout',
  },
];
