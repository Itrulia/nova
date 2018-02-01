import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
    selector: "nova-primary-stat",
    templateUrl: "./primary-stat.component.html",
    styleUrls: ["./primary-stat.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryStatComponent extends InheritClassComponent {
    @Input()
    public description: string;
}