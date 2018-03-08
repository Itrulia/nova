import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {MatchParticipant} from "../match-participant";

@Component({
  selector: "nova-completed-match",
  templateUrl: "./completed-match.component.html",
  styleUrls: ["./completed-match.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedMatchComponent {
  @Input()
  public participants: MatchParticipant[];
}
