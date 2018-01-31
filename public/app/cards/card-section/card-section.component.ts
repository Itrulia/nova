import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector: "nova-card-section",
  templateUrl: "./card-section.component.html",
  styleUrls: ["./card-section.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSectionComponent {
  @Input()
  public bordered: boolean;
}