import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CardsModule} from "./cards/cards.module";
import {GeneralModule} from "./general/general.module";
import {RouterModule, PreloadAllModules} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
              path: "",
              loadChildren: "./pages/pages.module#PagesModule"
            }
        ], {preloadingStrategy: PreloadAllModules}),
        // Tests
        CardsModule,
        GeneralModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
