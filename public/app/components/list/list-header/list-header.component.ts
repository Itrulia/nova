import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "nova-list-header",
  templateUrl: "./list-header.component.html",
  styleUrls: ["./list-header.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeaderComponent {}
