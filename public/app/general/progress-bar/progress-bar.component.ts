import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
    selector: "nova-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
    @Input()
    public percent: number;
}
