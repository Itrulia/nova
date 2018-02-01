import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
  selector: 'nova-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBarComponent extends InheritClassComponent {
  @Input()
  public value: string;

  @Input()
  public percent: string;

  @Input()
  public name: string;

  @Input()
  public description: string;
}
