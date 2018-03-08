import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {MatchParticipant} from "../match-participant";

@Component({
  selector: "nova-featured-match",
  templateUrl: "./featured-match.component.html",
  styleUrls: ["./featured-match.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedMatchComponent {
  @Input()
  public participants: MatchParticipant[];

  @Input()
  public time: string;
}