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
var DashboardComponent = (function () {
    function DashboardComponent(_receitaService) {
        this._receitaService = _receitaService;
        this.receitaModel = [];
        this.totalPagar = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._listarReceitasDoMes();
    };
    DashboardComponent.prototype._listarReceitasDoMes = function () {
        var _this = this;
        this._receitaService.listar()
            .subscribe(function (contas) {
            _this.receitaModel = contas;
            _this.totalContasMes = contas.length;
            _this.receitaModel.forEach(function (item) {
                _this.totalPagar += item.valor;
            });
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './app/dashboard/dashboard.component.html',
            providers: [receita_service_1.ReceitaService]
        }), 
        __metadata('design:paramtypes', [receita_service_1.ReceitaService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map