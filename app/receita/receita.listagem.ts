import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ReceitaService } from '../receita/service/receita.service';
import { Receita } from '../receita/models/receita.model';


@Component({
    selector: 'receitaListagem',
    templateUrl: './app/receita/receita.listagem.html',
    providers: [ReceitaService]
})

export class ReceitaListagem implements OnInit {
    receitaModel: Receita[] = [];
    totalPagar: number = 0;
    totalContasMes: number;
    totalStatusPagar: number = 0;
    qtdParcelas: Array<number> = [];
    exibircontasParcela: boolean = true;

    constructor(private _receitaService: ReceitaService) {

    }

    ngOnInit() {
        this._listarReceitasDoMes();
        this._carregarQtdParcelas();

    }

    private _carregarQtdParcelas(): void {
        for (var index = 1; index < 13; index++) {
            this.qtdParcelas.push(index);
        }
    }
    private _listarReceitasDoMes(): void {
        this._receitaService.listar()
            .subscribe(contas => {
                this.receitaModel = contas;
                contas.forEach(item => {
                    this.totalPagar += item.valor;
                })
            });
    }

    private _contaSelecionada(receita: Receita) {
        receita.status = !receita.status;
    }

    private _totalizarContas(): number {
        let total: number = 0;

        this.receitaModel.forEach(conta => {
            if (conta.status) {
                total += conta.valor;
            }
        })

        return total;
    }
    private _buscarAdicionarCorConta(status: boolean): string {
        let textClass: string;
        if (status) {
            textClass = 'bg-success';
        } else {
            textClass = 'bg-danger';
        }
        return textClass;
    }

    private _selecionarTipoConta(contaSelecionada: string) {
        this.exibircontasParcela = contaSelecionada === "parcelada" ? false : true;
    }
}