export const MenuItemFactory = [
  {
    label: 'Piezas',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'Nueva pieza',
        icon: 'pi pi-fw pi-plus',
        routerlink: '/create-piece',
      },
      {
        label: 'Borrar pieza',
        icon: 'pi pi-fw pi-trash',
        routerlink: '/delete-piece',
      },
      {
        label: 'Ver piezas',
        icon: 'pi pi-fw pi-external-link',
        routerlink: '/view-pieces',
      },
    ],
  },
  {
    label: 'Mueble',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Ensamblar',
        icon: 'pi pi-fw pi-wrench',
        routerlink: '/assemble-furniture',
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        routerlink: '/edit-furniture',
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-trash',
        routerlink: '/delete-furniture',
      },
      {
        label: 'Listar muebles',
        icon: 'pi pi-fw pi-align-justify',
        routerlink: '/view-furniture',
      },
      {
        label: 'Verificar mueble',
        icon: 'pi pi-fw pi-check',
        routerlink: '/verify-furniture',
      },
    ],
  },

  {
    label: 'Salir',
    icon: 'pi pi-fw pi-power-off',
    routerlink: '/logout',
  },
];
