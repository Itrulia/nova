import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
  selector: "nova-card-title",
  templateUrl: "./card-title.component.html",
  styleUrls: ["./card-title.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTitleComponent extends InheritClassComponent {}
