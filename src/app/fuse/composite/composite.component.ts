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
  private options: any[] = [];


  constructor() { }

  createTableRowHeaders(arr) {
    this.keys = Object.keys(arr[0]).slice(0,3);
  }

  ngOnInit() {

    this.features = [
      {id: 1, lat: 39, lng: 'east', selected: false, bgColor:'#feb236',},
      {id: 2, lat: 42, lng: 'north', selected: false, bgColor:'#d64161',},
      {id: 3, lat: 97, lng: 'west', selected: false, bgColor:'#ff7b25',},
    ];

    this.createTableRowHeaders(this.features);
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

  onSelectKey(evt, key: string) {
    // console.log('evt: ', evt);
    // console.log('evt target: ', evt.target, 'currentTarget: ', evt.currentTarget);
    this.selectedKey = key;
    // console.log('selectedKey: ', this.selectedKey);
  }
  
  updateOptions(newOpt: any) {
    //check options, replace last key of this type with the new option
    for (let option of this.options) {
      if (newOpt.row === option.row) {
        option = newOpt;
      } else {
        this.options.unshift(newOpt);
      }
    }
    return this.options;
  }

  onSetComposite(feature: string, key: string, idx: number, evt) {
    this.onSelectKey(evt, key);
    this.selectionColor = feature['bgColor'];
    this.selection = feature[this.selectedKey];
    this.toggleSelected(this.features, idx);
    //push selection object into options array, with value and key
    let newestOption = {val: this.selection, row: this.selectedKey, color: this.selectionColor};
    this.updateOptions(newestOption);
    // console.log('###################');
    // console.log('in onSet, selectedKey: ', this.selectedKey);
    // console.log('onSet color: ', this.selectionColor);
    // console.log('onSet feature: ', feature);
    // console.log('idx2: ', idx);
    // console.log('onSet selection: ', this.selection);
    // console.log('features after selected status change: ', this.features);
    // console.log('options: ', this.options);
    // console.log('###################');
  }

  
  toggleSelected(arr: any[], idx: number) {
    //change the selected feature's selected prop to true, but all others to false (i.e., toggle)
    for(let i = 0; i < arr.length; i++) {
      let selectedStatus = arr[i].selected;
      selectedStatus = !selectedStatus;
      arr[i].selected = (i === idx) ? true : false;
    }
  }

  // getInfo(idx: number, feature: any) {
  //   console.log('getInfo idx: ', idx, 'feature: ', feature);
  //   console.log('selected status: ', this.selected);
  // }

  logStatus(evt: string) {
    console.log('status event: ', evt);
  }

  setColor() {
    let color = (this.selectedKey) ? this.selectionColor: 'white';
    return color;
  }

}
