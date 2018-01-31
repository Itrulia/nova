import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabeledValueComponent} from "./labeled-value/labeled-value.component";
import {CopyToClipboardDirective} from "./copy-to-clipboard.directive";
import {PrimaryStatComponent} from "./primary-stat/primary-stat.component";
import {StatBarComponent} from "./stat-bar/stat-bar.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {LabelComponent} from "./label/label.component";
import {SquareImageComponent} from "./square-image/square-image.component";
import {FlatButtonComponent} from "./button/flat-button/flat-button.component";
import {RaisedButtonComponent} from "./button/raised-button/raised-button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LabeledValueComponent,
    PrimaryStatComponent,
    StatBarComponent,
    ProgressBarComponent,
    CopyToClipboardDirective,
    LabelComponent,
    SquareImageComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
  ],
  exports: [
    LabeledValueComponent,
    PrimaryStatComponent,
    StatBarComponent,
    ProgressBarComponent,
    CopyToClipboardDirective,
    SquareImageComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
  ]
})
export class GeneralModule {}