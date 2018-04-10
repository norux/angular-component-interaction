import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherRouterComponent } from './another-router.component';
import { ChildComponent } from './child/child.component';
import { anotherRouting } from './another-router.routing';

@NgModule({
  imports: [
    CommonModule,
    anotherRouting
  ],
  declarations: [
    AnotherRouterComponent,
    ChildComponent
  ]
})
export class AnotherRouterModule { }
