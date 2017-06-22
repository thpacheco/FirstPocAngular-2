import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './masterPage/masterPage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceitaListagem } from './receita/receita.listagem';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'masterPage', component: MasterPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ReceitaListagem', component: ReceitaListagem },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);