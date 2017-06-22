import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterPageComponent } from './masterPage/masterPage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceitaListagem } from './receita/receita.listagem';
import { routing } from './app.routes';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [
        MasterPageComponent,
        DashboardComponent,
        ReceitaListagem
    ],
    bootstrap: [MasterPageComponent]
})

export class AppModule {

}