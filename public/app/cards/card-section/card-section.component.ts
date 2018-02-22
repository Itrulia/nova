import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
  selector: "nova-card-section",
  templateUrl: "./card-section.component.html",
  styleUrls: ["./card-section.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSectionComponent extends InheritClassComponent {}