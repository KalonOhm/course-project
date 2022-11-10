import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingComponent } from './loading/loading.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
