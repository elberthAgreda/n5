import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'films',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'films',
            exposedModule: './Module',
          }).then((m) => m.HomeModule),
      },
      {
        path: 'series',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'series',
            exposedModule: './Module',
          }).then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
