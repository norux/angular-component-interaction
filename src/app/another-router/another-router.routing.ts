import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AnotherRouterComponent } from './another-router.component';

const anotherRoutes: Routes = [
  {
    path: '',
    component: AnotherRouterComponent
  }
];

export const anotherRouting: ModuleWithProviders = RouterModule.forChild(anotherRoutes);
