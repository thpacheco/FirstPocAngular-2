import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


import { ReceitaService } from '../receita/service/receita.service';
import { Receita } from '../receita/models/receita.model';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    providers: [ReceitaService]
})
export class DashboardComponent implements OnInit {

    receitaModel: Receita[] = [];
    totalPagar: number = 0;
    totalContasMes: number;

    constructor(private _receitaService: ReceitaService) {

    }

    ngOnInit() {
        this._listarReceitasDoMes();
    }

    private _listarReceitasDoMes(): void {
        this._receitaService.listar()
            .subscribe(contas => {
                this.receitaModel = contas;
                this.totalContasMes = contas.length;
                this.receitaModel.forEach(item => {
                    this.totalPagar += item.valor;
                });
            });
    }
}