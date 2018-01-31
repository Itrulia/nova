import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
    selector: "nova-square-image",
    templateUrl: "./square-image.component.html",
    styleUrls: ["./square-image.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareImageComponent extends InheritClassComponent {
    @Input()
    public src: string;

    @Input()
    public alt: string;

    @Input()
    public title: string;
}