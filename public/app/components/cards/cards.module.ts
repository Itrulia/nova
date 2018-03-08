import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card/card.component";
import {CardTitleComponent} from "./card-title/card-title.component";
import {CardProgressComponent} from "./card-progress/card-progress.component";
import {GeneralModule} from "../general/general.module";
import { CardSectionComponent } from './card-section/card-section.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
    imports: [
        CommonModule,
        GeneralModule
    ],
    declarations: [
        CardComponent,
        CardTitleComponent,
        CardProgressComponent,
        CardSectionComponent,
        CardFooterComponent,
        CardHeaderComponent
    ],
    exports: [
        CardComponent,
        CardTitleComponent,
        CardProgressComponent,
        CardSectionComponent,
        CardFooterComponent,
        CardHeaderComponent
    ]
})
export class CardsModule {}
