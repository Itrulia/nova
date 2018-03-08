import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatchesComponent} from "./matches/matches.component";
import {CardsComponent} from "./cards/cards.component";
import {ListsComponent} from "./lists/lists.component";
import {ListModule} from "../components/list/list.module";
import {MatchModule} from "../components/match/match.module";
import {GeneralModule} from "../components/general/general.module";
import {StatsModule} from "../components/stats/stats.module";
import {CardsModule} from "../components/cards/cards.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {component: CardsComponent, path: "cards"},
      {component: MatchesComponent, path: "matches"},
      {component: ListsComponent, path: "lists"},
    ]),
    //
    CardsModule,
    StatsModule,
    GeneralModule,
    MatchModule,
    ListModule
  ],
  declarations: [
    MatchesComponent,
    CardsComponent,
    ListsComponent
  ]
})
export class PagesModule {}
