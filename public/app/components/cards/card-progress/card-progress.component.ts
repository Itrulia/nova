import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {InheritClassComponent} from "../../general/inherit-class.component";

@Component({
    selector: 'nova-card-progress',
    templateUrl: './card-progress.component.html',
    styleUrls: ['./card-progress.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProgressComponent extends InheritClassComponent {
    @Input()
    public percent: number;
}
