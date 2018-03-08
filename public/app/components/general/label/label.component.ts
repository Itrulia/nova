import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "nova-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent extends InheritClassComponent {}