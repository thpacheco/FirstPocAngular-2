"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var receita_service_1 = require('../receita/service/receita.service');
var ReceitaListagem = (function () {
    function ReceitaListagem(_receitaService) {
        this._receitaService = _receitaService;
        this.receitaModel = [];
        this.totalPagar = 0;
        this.totalStatusPagar = 0;
        this.qtdParcelas = [];
        this.exibircontasParcela = true;
    }
    ReceitaListagem.prototype.ngOnInit = function () {
        this._listarReceitasDoMes();
        this._carregarQtdParcelas();
    };
    ReceitaListagem.prototype._carregarQtdParcelas = function () {
        for (var index = 1; index < 13; index++) {
            this.qtdParcelas.push(index);
        }
    };
    ReceitaListagem.prototype._listarReceitasDoMes = function () {
        var _this = this;
        this._receitaService.listar()
            .subscribe(function (contas) {
            _this.receitaModel = contas;
            contas.forEach(function (item) {
                _this.totalPagar += item.valor;
            });
        });
    };
    ReceitaListagem.prototype._contaSelecionada = function (receita) {
        receita.status = !receita.status;
    };
    ReceitaListagem.prototype._totalizarContas = function () {
        var total = 0;
        this.receitaModel.forEach(function (conta) {
            if (conta.status) {
                total += conta.valor;
            }
        });
        return total;
    };
    ReceitaListagem.prototype._buscarAdicionarCorConta = function (status) {
        var textClass;
        if (status) {
            textClass = 'bg-success';
        }
        else {
            textClass = 'bg-danger';
        }
        return textClass;
    };
    ReceitaListagem.prototype._selecionarTipoConta = function (contaSelecionada) {
        this.exibircontasParcela = contaSelecionada === "parcelada" ? false : true;
    };
    ReceitaListagem = __decorate([
        core_1.Component({
            selector: 'receitaListagem',
            templateUrl: './app/receita/receita.listagem.html',
            providers: [receita_service_1.ReceitaService]
        }), 
        __metadata('design:paramtypes', [receita_service_1.ReceitaService])
    ], ReceitaListagem);
    return ReceitaListagem;
}());
exports.ReceitaListagem = ReceitaListagem;
//# sourceMappingURL=receita.listagem.js.map