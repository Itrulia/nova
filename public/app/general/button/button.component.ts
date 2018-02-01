import {InheritClassComponent} from "../inherit-class.component";
import {Input, Output, EventEmitter, Attribute} from "@angular/core";

export type ButtonActionType = "submit" | "button";

export abstract class ButtonComponent extends InheritClassComponent{
    @Input("disabled")
    public isDisabled: boolean;

    @Input("loading")
    public isLoading: boolean;

    @Attribute("type")
    public type: ButtonActionType = "submit";

    @Output()
    public clicked = new EventEmitter<MouseEvent>();
}