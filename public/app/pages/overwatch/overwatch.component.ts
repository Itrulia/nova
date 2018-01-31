import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: "nova-overwatch",
    templateUrl: "./overwatch.component.html",
    styleUrls: ["./overwatch.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverwatchComponent implements OnInit {
    public teams = [
        [
            {name: "Itrulia", role: "DPS (Hitscan)"},
            {name: "Ner0", role: "DPS (Projectile)"},
            {name: "Jennythepanda", role: "Support"},
            {name: "Itrulia", role: "Support"},
            {name: "Jennythepanda", role: "Tank"},
            {name: "Ner0", role: "Tank"},
        ],
        [
            {name: "Itrulia", role: "DPS (Hitscan)"},
            {name: "Jennythepanda", role: "Support"},
            {name: "Ner0", role: "DPS (Projectile)"},

            {name: "Itrulia", role: "Support"},
            {name: "Jennythepanda", role: "Tank"},
            {name: "Ner0", role: "Tank"},
        ]
    ];


    constructor() {}

    ngOnInit() {
    }

}
