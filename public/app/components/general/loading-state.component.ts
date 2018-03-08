import {Input} from "@angular/core";

export abstract class LoadingStateComponent {
    @Input()
    public loading: boolean;
}