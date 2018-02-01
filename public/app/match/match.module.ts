import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScheduledMatchComponent} from "./scheduled-match/scheduled-match.component";
import {FeaturedMatchComponent} from "./featured-match/featured-match.component";
import {CompletedMatchComponent} from "./completed-match/completed-match.component";
import {MatchParticipantComponent} from "./match-participant/match-participant.component";
import {GeneralModule} from "../general/general.module";

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    ScheduledMatchComponent,
    FeaturedMatchComponent,
    CompletedMatchComponent,
    MatchParticipantComponent
  ],
  exports: [
    ScheduledMatchComponent,
    FeaturedMatchComponent,
    CompletedMatchComponent,
    MatchParticipantComponent
  ]
})
export class MatchModule {}
