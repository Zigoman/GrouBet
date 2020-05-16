import {Routes} from '@angular/router';
import {LoginComponent} from './core/login/login.component';
/*import {AppGuard, StableApiGuard} from './app.guard';*/


export const AppRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
               /* canActivate: [StableApiGuard],*/
                component: LoginComponent
            },
          /*  {
                path: 'error',
                component: ErrorComponent
                // canActivate: [AppGuard],
            },*/
          {
            path: '',
          /*  canActivate: [AppGuard],*/
            loadChildren: () => import('./core/main/main.module').then(m => m.MainModule)
          },
        ]
    }
];
