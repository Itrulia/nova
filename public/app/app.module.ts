import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CardsModule} from "./cards/cards.module";
import {GeneralModule} from "./general/general.module";
import {StatsModule} from "./stats/stats.module";
import {MatchModule} from "./match/match.module";
import {FormModule} from "./form/form.module";
import {ListModule} from "./list/list.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
        // Tests
        CardsModule,
        StatsModule,
        GeneralModule,
        MatchModule,
        FormModule,
        ListModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
