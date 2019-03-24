import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

declare var ol: any;

let map: any;

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements AfterViewInit {

  @Input() longitude: number = 20.6913;
  @Input() latitude: number = 49.6249;
  @ViewChild('osmMap') osmMap: ElementRef<any>;

  map: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });
  }
}
