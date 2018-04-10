import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TestRouterComponent } from './test-router.component';

const testRoutes: Routes = [
  {
    path: '',
    component: TestRouterComponent
  }
];

export const testRouting: ModuleWithProviders = RouterModule.forChild(testRoutes);
