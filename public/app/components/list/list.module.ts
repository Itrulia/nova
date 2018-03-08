import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListSectionComponent} from "./list-section/list-section.component";
import {ListSectionHeaderComponent} from "./list-section-header/list-section-header.component";
import {ListItemComponent} from "./list-item/list-item.component";
import {ListComponent} from "./list/list.component";
import { ListHeaderComponent } from "./list-header/list-header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    ListSectionHeaderComponent,
    ListSectionComponent,
    ListHeaderComponent,
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    ListSectionHeaderComponent,
    ListSectionComponent,
    ListHeaderComponent,
  ]
})
export class ListModule {}
