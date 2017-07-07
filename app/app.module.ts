import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { MasterPageComponent } from './masterPage/masterPage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceitaListagem } from './receita/receita.listagem';


@NgModule({
    imports: [BrowserModule,
        routing,
        CommonModule,
        HttpModule
    ],
    declarations: [
        MasterPageComponent,
        DashboardComponent,
        ReceitaListagem
    ],
    bootstrap: [MasterPageComponent]
})

export class AppModule {

}