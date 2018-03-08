import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
  selector: "nova-card-header",
  templateUrl: "./card-header.component.html",
  styleUrls: ["./card-header.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent extends InheritClassComponent {}