import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dembow',
  templateUrl: './dembow.component.html',
  styleUrls: ['./dembow.component.sass']
})
export class DembowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Angular 4';
  opened = false;
  filterStatus = false;
  openTab() {
    this.opened = true;
  }
  openTab2() {
    this.filterStatus = true;
  }
}
