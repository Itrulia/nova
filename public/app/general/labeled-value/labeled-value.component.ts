import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
    selector: 'nova-labeled-value',
    templateUrl: './labeled-value.component.html',
    styleUrls: ['./labeled-value.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabeledValueComponent {
    @Input()
    public label: string;
}
