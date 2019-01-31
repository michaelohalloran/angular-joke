import { Component, OnInit, Input } from '@angular/core';

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

  private selectedKey: string = '';
  private selection: any;
  private selectionColor: string;
  @Input() selected: any;


  constructor() { }

  createTableRowHeaders(arr) {
    this.keys = Object.keys(arr[0]).slice(0,3);
  }

  ngOnInit() {

    this.features = [
      {id: 1, lat: 'north', lng: 'east', selected: false, bgColor:'red', bgColor2: 'orange'},
      {id: 2, lat: 'south', lng: 'east-west', selected: false, bgColor:'blue', bgColor2: 'purple'},
      {id: 3, lat: 'north-south', lng: 'west', selected: false, bgColor:'green', bgColor2: 'yellow'},
    ];

    this.createTableRowHeaders(this.features);
    console.log('this.keys: ', this.keys);
  }

  // onSelectFeature(evt, feature: Object, lat: string) {
  //   this.selectedFeature = feature;
  //   this.selectedLat = lat;
  //   console.log('hit onSelect', this.selectedFeature);
  //   console.log('evt parent', evt);
  // }

  // getCompositeBgColor() {
  //   this.selectedBgColor = this.selectedFeature ? this.selectedFeature['bgColor']: 'white';
  //   return this.selectedBgColor;
  // }

  onSelectKey(key: string) {
    this.selectedKey = key;
    console.log('selectedKey: ', this.selectedKey);
  }

  onSetComposite(feature: string, key: string, idx: number) {
    this.onSelectKey(key);
    this.selectionColor = feature['bgColor2'];
    console.log('onSet feature: ', feature);
    console.log('idx2: ', idx);
    console.log('onSet color: ', this.selectionColor);
    console.log('in onSet, selectedKey: ', this.selectedKey);
    this.selection = feature[this.selectedKey];
    this.toggleSelected(this.features, idx);
    console.log('onSet selection: ', this.selection);
    console.log('features after selected status change: ', this.features);
  }
  
  toggleSelected(arr: any[], idx: number) {
    //change the selected feature's selected prop to true, but all others to false (i.e., toggle)
    for(let i = 0; i < arr.length; i++) {
      let selectedStatus = arr[i].selected;
      selectedStatus = !selectedStatus;
      arr[i].selected = i === idx ? true : false;
    }
  }

  getInfo(idx: number, feature: any) {
    console.log('getInfo idx: ', idx, 'feature: ', feature);
    console.log('selected status: ', this.selected);
  }

  logStatus(evt: string) {
    console.log('status event: ', evt);
  }

  setColor() {
    let color = (this.selectedKey) ? this.selectionColor: 'white';
    return color;
  }

}
