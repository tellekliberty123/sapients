import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'spd-outwear',
  templateUrl: './outwear.component.html',
  styleUrls: ['./outwear.component.scss']
})
export class OutwearComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.loadBreadcrumbs();
  }

  private loadBreadcrumbs() {
    this.items = [
      { label: 'Clothing' },
      { label: 'Outwear' }
    ];
  }
}
