import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {LabelComponent} from "./label/label.component";
import {SquareImageComponent} from "./square-image/square-image.component";
import {FlatButtonComponent} from "./button/flat-button/flat-button.component";
import {RaisedButtonComponent} from "./button/raised-button/raised-button.component";
import {CopyToClipboardDirective} from "./copy-to-clipboard.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressBarComponent,
    CopyToClipboardDirective,
    LabelComponent,
    SquareImageComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
  ],
  exports: [
    ProgressBarComponent,
    CopyToClipboardDirective,
    SquareImageComponent,
    LabelComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
  ]
})
export class GeneralModule {}