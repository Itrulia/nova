import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector: "nova-list-section",
  templateUrl: "./list-section.component.html",
  styleUrls: ["./list-section.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSectionComponent {
  @Input()
  public blockHeader: boolean;
}
