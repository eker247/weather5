import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class W5LayoutService {

  visibleSidebar = new BehaviorSubject(false);

  constructor() { }
}
