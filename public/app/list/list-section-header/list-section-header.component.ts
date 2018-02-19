import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nova-list-section-header',
  templateUrl: './list-section-header.component.html',
  styleUrls: ['./list-section-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
