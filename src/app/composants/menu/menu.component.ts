import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa fa-line-chart',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fa fa-pie-chart',
        url:''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fa fa-bar-chart',
        url:'statistiques'
      }
    ]
  },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa fa-shopping-cart',
      url: '',
      sousMenu:[
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa fa-shopping-cart',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fa fa-archive',
          url: ''
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa fa-users',
      url: '',
      sousMenu:[
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa fa-users',
          url: ''
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa fa-shopping-basket',
          url: ''
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa fa-users',
      url: '',
      sousMenu:[
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa fa-users',
          url: ''
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa fa-truck',
          url: ''
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fa fa-cogs',
      url: '',
      sousMenu:[
        {
          id: '51',
          titre: 'Categories',
          icon: 'fa fa-wrench',
          url: ''
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa fa-users',
          url: ''
        }
      ]
    }
];

  constructor(private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
