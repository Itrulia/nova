import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {PagesModule} from "./example-pages/pages.module";

import {CardsModule} from "./components/cards/cards.module";
import {GeneralModule} from "./components/general/general.module";
import {StatsModule} from "./components/stats/stats.module";
import {MatchModule} from "./components/match/match.module";
import {ListModule} from "./components/list/list.module";

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
