import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
    selector: "nova-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent extends InheritClassComponent {}