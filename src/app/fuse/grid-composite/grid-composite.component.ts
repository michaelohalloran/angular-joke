import { Component, OnInit } from '@angular/core';
import { ComposerService } from '../composer.service';
import { Feature } from '../feature.model';

@Component({
  selector: 'grid-composite',
  templateUrl: './grid-composite.component.html',
  styleUrls: ['./grid-composite.component.css']
})
export class GridCompositeComponent implements OnInit {

  features: Feature[] = [];
  keys: string[] = [];

  constructor(private composerService: ComposerService) { }

  createRowKeys() {
    let first = this.features[0];
    this.keys = Object.keys(first).slice(0,3);
    return this.keys;
  }

  ngOnInit() {
    this.features = this.composerService.getFeatures();
    this.createRowKeys();
  }

  toggleSelected(idx: number) {
    console.log('hit toggle');
    //toggle selected on all
    for(let i = 0; i < this.features.length; i++) {
      //if feature is the clicked one, toggle it
      if(this.features[i] === this.features[idx]) {
        this.features[idx].selected = true;
      } else {
      //otherwise, set selected to false (since we're dealing with one we didn't click)
        this.features[i].selected = false;
      }
    }
    console.log('features after toggling: ', this.features);
    return this.features;
  }

  getRowName(idx: number) {
    return this.keys[idx];
  }

}
