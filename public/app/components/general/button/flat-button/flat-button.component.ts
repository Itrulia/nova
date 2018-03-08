import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {ButtonComponent} from "../button.component";

@Component({
  selector: "nova-flat-button",
  templateUrl: "./flat-button.component.html",
  styleUrls: ["./flat-button.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatButtonComponent extends ButtonComponent {}
