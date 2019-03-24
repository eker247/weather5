import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  svg?: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/weather', title: 'Weather', svg: 'cloud', class: '' },
  { path: '/temperature', title: 'Temperature', svg: 'thermometer', class: '' },
  { path: '/pressure', title: 'Pressure', svg: 'pressure', class: '' },
  { path: '/humidity', title: 'Humidity', svg: 'humidity', class: '' },
  { path: '/wind', title: 'Wind', svg: 'wind', class: '' },
  { path: '/map', title: 'Map', svg: 'map', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
