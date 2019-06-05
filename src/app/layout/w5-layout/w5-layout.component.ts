import { Component, OnInit} from '@angular/core';
import { W5LayoutService } from 'app/layout/w5-layout.service';

@Component({
  selector: 'app-w5-layout',
  templateUrl: './w5-layout.component.html',
  styleUrls: ['./w5-layout.component.scss']
})
export class W5LayoutComponent implements OnInit {

  constructor(public layoutService: W5LayoutService) { }

  ngOnInit() {}

  public close() {
    this.layoutService.visibleSidebar.next(false);
  }
}
