import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nova-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
