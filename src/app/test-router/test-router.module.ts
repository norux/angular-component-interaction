import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRouterComponent } from './test-router.component';
import { Child2Component } from './child2/child2.component';
import { testRouting } from './test-router.routing';

@NgModule({
  imports: [
    CommonModule,
    testRouting
  ],
  declarations: [
    TestRouterComponent,
    Child2Component
  ]
})
export class TestRouterModule { }
