import { Component, ViewChild, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements AfterViewInit {

  @Input() set coordinates(coord: { longitude: number, latitude: number }) {
    console.log(coord);
    this.longitudeData = coord.longitude;
    this.latitudeData = coord.latitude;
    if (this.map) {
      this.changeMapCenter();
    }
  }

  longitudeData: number;
  latitudeData: number;
  map: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.setMap();
  }


  setMap() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitudeData || 20.6913, this.latitudeData || 49.6249]),
        zoom: 8
      })
    });
  }

  changeMapCenter() {
    this.map.getView().setCenter(ol.proj.fromLonLat([this.longitudeData, this.latitudeData]));
  }
}
