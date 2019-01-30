import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {

  private features: any[] = [];
  private keys: any[] = [];
  private selectedFeature: Object;
  private selectedId: number;
  private selectedLat: string = '';
  private selectedLng: string = '';
  private selectedBgColor: string = '';


  constructor() { }

  createTableRowHeaders(arr) {
    // for(let i = 0; i < 1; i++) {
    //   this.keys.push(Object.keys(arr[i]));
    // }
    this.keys = Object.keys(arr[0]).slice(0,-2);
  }

  ngOnInit() {

    this.features = [
      {id: 1, lat: 'north', lng: 'east', selected: false, bgColor:'red'},
      {id: 2, lat: 'south', lng: 'east-west', selected: false, bgColor:'blue'},
      {id: 3, lat: 'north-south', lng: 'west', selected: false, bgColor:'green'},
    ];

    this.createTableRowHeaders(this.features);
    console.log('this.keys: ', this.keys);
  }

  onSelectFeature(evt, feature: Object, lat: string) {
    this.selectedFeature = feature;
    this.selectedLat = lat;
    console.log('hit onSelect', this.selectedFeature);
    console.log('evt parent', evt);
  }

  getCompositeBgColor() {
    this.selectedBgColor = this.selectedFeature ? this.selectedFeature['bgColor']: 'white';
    return this.selectedBgColor;

  }


}
