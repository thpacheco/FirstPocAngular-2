"use strict";
var router_1 = require('@angular/router');
var masterPage_component_1 = require('./masterPage/masterPage.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var receita_listagem_1 = require('./receita/receita.listagem');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'masterPage', component: masterPage_component_1.MasterPageComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'ReceitaListagem', component: receita_listagem_1.ReceitaListagem },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map