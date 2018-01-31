import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: "nova-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {}