import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {mainRoutes} from './main.routes';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SharedModule} from '../../shared/shared.module';
import { GroupsComponent } from './groups/groups.component';
import { ResultsComponent } from './results/results.component';
import { ScoringComponent } from './scoring/scoring.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
    MainComponent,
    DashboardComponent,
    NavBarComponent,
    GroupsComponent,
    ResultsComponent,
    ScoringComponent]
})
export class MainModule {
}
