import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { W5LayoutService } from 'app/layout/layouts/w5-layout/w5-layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public layoutService: W5LayoutService) { }

  ngOnInit() { }

  getTitle() {
    return 'Weather 5';
  }
}
