import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "nova-card-title",
  templateUrl: "./card-title.component.html",
  styleUrls: ["./card-title.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTitleComponent {}
