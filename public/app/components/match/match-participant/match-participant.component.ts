import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector: "nova-match-participant",
  templateUrl: "./match-participant.component.html",
  styleUrls: ["./match-participant.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchParticipantComponent {
  @Input()
  public name: string;

  @Input()
  public logo: string;
}