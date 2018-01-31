import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector: 'nova-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  @Input()
  public team;
}
