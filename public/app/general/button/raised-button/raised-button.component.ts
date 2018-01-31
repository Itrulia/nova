import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {ButtonComponent} from "../button.component";

@Component({
  selector: "nova-raised-button",
  templateUrl: "./raised-button.component.html",
  styleUrls: ["./raised-button.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaisedButtonComponent extends ButtonComponent {}
