import {Directive, HostListener, Input, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";

@Directive({selector: "[novaCopyToClipboard]"})
export class CopyToClipboardDirective {
    @Input()
    public novaCopyToClipboard: string;

    constructor(@Inject(DOCUMENT) private dom: Document) {}

    @HostListener("click", ["$event"])
    public onClick(event: MouseEvent) {
        event.preventDefault();

        let textarea = null;
        try {
            textarea = this.dom.createElement("textarea");
            textarea.style.height = "0";
            textarea.style.left = "-100px";
            textarea.style.opacity = "0";
            textarea.style.position = "fixed";
            textarea.style.top = "-100px";
            textarea.style.width = "0";
            textarea.style["pointer-events"] = "none";
            this.dom.body.appendChild(textarea);

            textarea.value = this.novaCopyToClipboard;
            textarea.select();

            this.dom.execCommand("copy");
        } finally {
            if (textarea && textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
        }
    }
}
