import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GroupsComponent} from './groups/groups.component';
import {ResultsComponent} from './results/results.component';
import {ScoringComponent} from './scoring/scoring.component';

export const mainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'groups', component: GroupsComponent},
          {path: 'results', component: ResultsComponent},
          {path: 'scoring', component: ScoringComponent}
        ]
      }
    ]
  }
];
