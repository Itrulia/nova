import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
  selector: "nova-card-footer",
  templateUrl: "./card-footer.component.html",
  styleUrls: ["./card-footer.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent extends InheritClassComponent {}