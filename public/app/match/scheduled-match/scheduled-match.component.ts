import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {MatchParticipant} from "../match-participant";

@Component({
  selector: "nova-scheduled-match",
  templateUrl: "./scheduled-match.component.html",
  styleUrls: ["./scheduled-match.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledMatchComponent {
  @Input()
  public participants: MatchParticipant[];

  @Input()
  public time: string;
}