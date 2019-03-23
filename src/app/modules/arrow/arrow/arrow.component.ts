import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  @Input() rotate: number;
  @ViewChild('arrow') arrow: ElementRef;

  constructor() { }

  ngOnInit() {
    this.arrow.nativeElement.style.setProperty('transform', `rotate(${this.rotate || 0}deg)`);
  }

}
