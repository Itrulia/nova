import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabeledValueComponent} from "./labeled-value/labeled-value.component";
import {PrimaryStatComponent} from "./primary-stat/primary-stat.component";
import {StatBarComponent} from "./stat-bar/stat-bar.component";
import {GeneralModule} from "../general/general.module";

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    LabeledValueComponent,
    PrimaryStatComponent,
    StatBarComponent
  ],
  exports: [
    LabeledValueComponent,
    PrimaryStatComponent,
    StatBarComponent
  ]
})
export class StatsModule {}
