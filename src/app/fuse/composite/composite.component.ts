import { Component, OnInit, Input } from '@angular/core';
import { FuserService } from './fuser.service';

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
  private storedObjs: any[] = [];
  private displayVal: string = '';


  constructor(private fuserService: FuserService) { }

  createTableRowHeaders(arr) {
    this.keys = Object.keys(arr[0]).slice(0,3);
  }

  ngOnInit() {

    this.features = this.fuserService.getFeatures();
    this.options = this.fuserService.getOptions();

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
  
  // updateOptions(newOpt: any) {
  //   //collect current row vals, check if our newOpt's row val is there
  //   let currentRows = this.options.reduce((acc, next)=> {
  //     acc.push(next.row);
  //     return acc;
  //   }, []);
  //   //only push to array if nothing else of same row type is there
  //   if(!currentRows.includes(newOpt.row)) {
  //     this.options.unshift(newOpt);
  //   } else {
  //     //if it is there, replace it with what we are about to unshift
  //     let itemToReplace = this.options.find(opt => opt.row === newOpt.row);
  //     let replaceIdx = this.options.indexOf(itemToReplace);
  //     this.options[replaceIdx] = newOpt;
  //   }
  //   console.log('currentRows: ', currentRows);
  //   console.log('options now: ', this.options);
  // }

  onSetComposite(feature: string, key: string, idx: number, evt) {
    this.onSelectKey(evt, key);
    this.selectionColor = feature['bgColor'];
    this.selection = feature[this.selectedKey];
    this.toggleSelected(this.features, idx);
    //push selection object into options array, with value and key
    let newestOption = {val: this.selection, row: this.selectedKey, color: this.selectionColor};
    this.fuserService.updateOptions(newestOption);
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

  storeComposite() {
    console.log('hit store function');
    //take current composite obj, push into stored array
    // this.storedObjs.unshift();
  }

}
