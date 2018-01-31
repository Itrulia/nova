import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {RainbowComponent} from "./rainbow/rainbow.component";
import {OverwatchComponent} from "./overwatch/overwatch.component";
import {CardsComponent} from "./components/cards/cards.component";
import {GeneralComponent} from "./components/general/general.component";
import {CardsModule} from "../cards/cards.module";
import {GeneralModule} from "../general/general.module";
import { TeamComponent } from './overwatch/team/team.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "overwatch",
        component: OverwatchComponent
      },
      {
        path: "rainbow",
        component: RainbowComponent
      },
      {
        path: "components/cards",
        component: CardsComponent
      },
      {
        path: "components/general;",
        component: GeneralComponent
      }
    ]),

    CardsModule,
    GeneralModule
  ],
  declarations: [
    RainbowComponent,
    OverwatchComponent,
    CardsComponent,
    GeneralComponent,
    TeamComponent
  ]
})
export class PagesModule {}
