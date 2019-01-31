import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'property-selector',
  templateUrl: './property-selector.component.html',
  styleUrls: ['./property-selector.component.css']
})
export class PropertySelectorComponent implements OnInit {

  @Input() selectedKey: string = '';
  @Input() selection: any;
  @Input() selectionColor: string;
  @Input() selected: any;
  @Input() features: any[] = [];
  @Input() keys: any[] = [];
  @Input() rowId: number;
  @Input() rowKey: string;
  @Output() selectedStatus: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('features in init: ', this.features);
    console.log('selection in init: ', this.selection);
    console.log('selected status in init: ', this.selected);
    console.log('selectionColor in init: ', this.selectionColor);
    console.log('rowId: ', this.rowId);
    console.log('rowKey: ', this.rowKey);
  }

  updateStatus() {
    // console.log('updatedStatus rowKey: ', rowKey);
    console.log('this.selected in property-selector: ', this.selected);
    this.selectedStatus.emit('hello');
  }
  

}
