import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FuserService } from '../fuser.service';

@Component({
  selector: 'property-selector',
  templateUrl: './property-selector.component.html',
  styleUrls: ['./property-selector.component.css']
})
export class PropertySelectorComponent implements OnInit {

  @Input() selectedKey: string = '';
  @Input() selectedCell: any;
  @Input() selectionColor: string;
  @Input() selected: any;
  @Input() features: any[] = [];
  @Input() keys: any[] = [];
  @Input() rowId: number;
  @Input() rowKey: string;
  @Output() selectedStatus: EventEmitter<string> = new EventEmitter<string>();
  @Input() options: any[];
  @Input() displayVal: string = '';
  lastVal: string = '';
  lastColor: string = '';

  constructor(private fuserService: FuserService) { }

  ngOnInit() {
    // console.log('*****************************************');
    // console.log('features in init: ', this.features);
    // console.log('selection in init: ', this.selection);
    // console.log('selected status in init: ', this.selected);
    // console.log('selectionColor in init: ', this.selectionColor);
    // console.log('rowId: ', this.rowId);
    // console.log('rowKey: ', this.rowKey);
    // console.log('*****************************************');
  }

  updateStatus() {
    // console.log('updatedStatus rowKey: ', rowKey);
    console.log('this.selected in property-selector: ', this.selected);
    this.selectedStatus.emit('hello');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('changes: ', changes);
  // }

  setDisplay() {
    //loop over options, if this.rowKey matches this.options[i].row, output that value
    // for (let opt of this.options) {
    //   if (this.rowKey === opt.row) {
    //     // this.lastVal = opt;
    //     this.lastVal = this.fuserService.setDisplayVal(this.rowKey);
    //   }
    // }



    // this.lastVal = this.fuserService.setDisplayVal(this.rowKey);
    // return this.lastVal;
  }
  

}
