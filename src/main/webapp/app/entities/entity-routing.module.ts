import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blood-pressure',
        data: { pageTitle: 'lastPointsApp.bloodPressure.home.title' },
        loadChildren: () => import('./blood-pressure/blood-pressure.module').then(m => m.BloodPressureModule),
      },
      {
        path: 'weight',
        data: { pageTitle: 'lastPointsApp.weight.home.title' },
        loadChildren: () => import('./weight/weight.module').then(m => m.WeightModule),
      },
      {
        path: 'points',
        data: { pageTitle: 'lastPointsApp.points.home.title' },
        loadChildren: () => import('./points/points.module').then(m => m.PointsModule),
      },
      {
        path: 'preferences',
        data: { pageTitle: 'lastPointsApp.preferences.home.title' },
        loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
