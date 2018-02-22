import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CardsModule} from "./cards/cards.module";
import {GeneralModule} from "./general/general.module";
import {StatsModule} from "./stats/stats.module";
import {MatchModule} from "./match/match.module";
import {ListModule} from "./list/list.module";
import {RouterModule} from "@angular/router";
import {PagesModule} from "./pages/pages.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([

        ]),
        //
        PagesModule,
        // Tests
        CardsModule,
        StatsModule,
        GeneralModule,
        MatchModule,
        ListModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
