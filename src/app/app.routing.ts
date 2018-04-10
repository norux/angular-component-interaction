import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'test-router',
    loadChildren: 'app/test-router/test-router.module#TestRouterModule',
  },

  {
    path: 'another-router',
    loadChildren: 'app/another-router/another-router.module#AnotherRouterModule',
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
