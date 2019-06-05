import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {

  rotation: string;

  @Input() set rotate(rotation: number) {
    this.rotation = `rotate(${rotation}deg)`;
  }
}

