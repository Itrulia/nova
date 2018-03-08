import {InheritClassComponent} from "../inherit-class.component";
import {Input, Output, EventEmitter} from "@angular/core";

export type ButtonActionType = "submit" | "button";

export abstract class ButtonComponent extends InheritClassComponent{
    @Input("disabled")
    public isDisabled: boolean;

    @Input("loading")
    public isLoading: boolean;

    @Input("type")
    public type: ButtonActionType = "submit";

    @Output()
    public clicked = new EventEmitter<MouseEvent>();
}