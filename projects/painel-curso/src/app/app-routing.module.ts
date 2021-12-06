import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'forms-reactive-assignment-start',
    loadChildren: () => import('../../../forms-reactive-assignment-start/src/app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: 'forms-reactive-start',
    loadChildren: () => import('../../../forms-reactive-start/src/app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: 'forms-td-assignment-start',
    loadChildren: () => import('../../../forms-td-assignment-start/src/app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: 'forms-td-start',
    loadChildren: () => import('../../../forms-td-start/src/app/app.module')
      .then(m => m.FormsTdStartAppModule)
  },
  {
    path: 'main',
    loadChildren: () => import('../../../main/src/app/app.module')
      .then(m => m.MainAppModule)
  },
  {
    path: 'observables-start',
    loadChildren: () => import('../../../observables-start/src/app/app.module')
      .then(m => m.ObservablesStartAppModule)
  },
  {
    path: 'routing-start',
    loadChildren: () => import('../../../routing-start/src/app/app.module')
      .then(m => m.RoutingStartAppModule)
  },
  {
    path: 'services-assignment-start',
    loadChildren: () => import('../../../services-assignment-start/src/app/app.module')
      .then(m => m.S3_AppModule)
  },
  {
    path: 'using-services',
    loadChildren: () => import('../../../using-services/src/app/app.module')
      .then(m => m.UsingServicesAppModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
