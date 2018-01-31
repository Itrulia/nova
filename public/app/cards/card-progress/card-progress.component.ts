import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
    selector: 'nova-card-progress',
    templateUrl: './card-progress.component.html',
    styleUrls: ['./card-progress.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProgressComponent {
    @Input()
    public percent: number;
}
