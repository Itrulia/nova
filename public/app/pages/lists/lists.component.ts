import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nova-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsComponent implements OnInit {
  public sections = new Array(2);
  public items = new Array(10);

  constructor() { }

  ngOnInit() {
  }

}
