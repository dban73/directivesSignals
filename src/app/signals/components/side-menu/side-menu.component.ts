import { Component, signal } from '@angular/core';

interface menuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = signal<menuItem[]>([
    {
      title: 'Counter',
      route: 'counter',
    },
    {
      title: 'User Info',
      route: 'user-info',
    },
    {
      title: 'Mutaciones',
      route: 'properties',
    },
  ]);
  // public menuItems: menuItem[] = [
  //   {
  //     title: 'Counter',
  //     route: 'counter',
  //   },
  //   {
  //     title: 'User Info',
  //     route: 'user-info',
  //   },
  //   {
  //     title: 'Mutaciones',
  //     route: 'properties',
  //   },
  // ];
}
