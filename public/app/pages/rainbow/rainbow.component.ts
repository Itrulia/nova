import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nova-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RainbowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
