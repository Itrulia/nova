import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
    selector: 'nova-labeled-value',
    templateUrl: './labeled-value.component.html',
    styleUrls: ['./labeled-value.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabeledValueComponent extends InheritClassComponent {
    @Input()
    public label: string;
}