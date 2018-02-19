import {Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl} from "@angular/forms";
import {InheritClassComponent} from "../../general/inherit-class.component";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: "nova-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent extends InheritClassComponent implements ControlValueAccessor {
  @Input("required")
  public isRequired: boolean = false;

  public isDisabled: boolean = false;
  private model: boolean = false;

  private onTouchedCallback(value: boolean): void {}
  private onChangeCallback(value: boolean): void {}

  public get isChecked(): boolean {
      return this.model;
  }

  public set isChecked(value: boolean) {
    this.writeValue(value);
  }

  public writeValue(value: boolean): void {
    if (this.model !== Boolean(value)) {
      this.model = Boolean(value);
      this.onChangeCallback(this.model);
    }
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: (value: boolean) => void): void {
    this.onTouchedCallback = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}