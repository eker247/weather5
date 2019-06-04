import { Component, HostListener, OnInit } from '@angular/core';
import { W5LayoutService } from 'app/layout/layouts/w5-layout/w5-layout.service';

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
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public layoutService: W5LayoutService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
