webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_torneios_torneios_component__ = __webpack_require__("../../../../../src/app/pages/torneios/torneios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_resultado_resultado_component__ = __webpack_require__("../../../../../src/app/pages/resultado/resultado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'torneios',
        pathMatch: 'full'
    },
    {
        path: 'torneios',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_torneios_torneios_component__["a" /* TorneiosComponent */]
    },
    {
        path: 'resultado',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_resultado_resultado_component__["a" /* ResultadoComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n    position: fixed;\n    bottom: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<div class=\"container-fluid\"> \n  <router-outlet></router-outlet>\n</div>\n\n<footer>\n    <div>Icons made by <a href=\"https://www.flaticon.com/authors/smashicons\" title=\"Smashicons\">Smashicons</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_torneio_service__ = __webpack_require__("../../../../../src/app/services/torneio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_torneios_torneios_component__ = __webpack_require__("../../../../../src/app/pages/torneios/torneios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player_player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_my_new_pipe_pipe__ = __webpack_require__("../../../../../src/app/pipes/my-new-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_name_pipe_pipe__ = __webpack_require__("../../../../../src/app/pipes/name-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resultado_resultado_component__ = __webpack_require__("../../../../../src/app/pages/resultado/resultado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_route_module__ = __webpack_require__("../../../../../src/app/app-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_sort_by_score_pipe__ = __webpack_require__("../../../../../src/app/pipes/sort-by-score.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_by_score_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter-by-score.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_torneios_torneios_component__["a" /* TorneiosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_my_new_pipe_pipe__["a" /* MyNewPipePipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_name_pipe_pipe__["a" /* NamePipePipe */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resultado_resultado_component__["a" /* ResultadoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_sort_by_score_pipe__["a" /* SortByScorePipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_filter_by_score_pipe__["a" /* FilterByScorePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_route_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_torneio_service__["a" /* TorneioService */],
                __WEBPACK_IMPORTED_MODULE_6__services_socket_service__["a" /* SocketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/resultado/resultado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr td:last-child {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n.navbar{\n    margin-top: 16px;\n}\ntbody tr:nth-child(1) td:nth-child(3)::before{\n    content: url(" + __webpack_require__("../../../../../src/assets/1.png") + ");\n    margin-left: -60px\n}\ntbody tr:nth-child(2) td:nth-child(3)::before{\n    content: url(" + __webpack_require__("../../../../../src/assets/2.png") + ");\n    margin-left: -60px\n}\ntbody tr:nth-child(3) td:nth-child(3)::before{\n    content: url(" + __webpack_require__("../../../../../src/assets/3.png") + ");\n    margin-left: -60px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/resultado/resultado.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"listaCategorias\">\n  <nav class=\"navbar navbar-inverse\">\n    <ul class=\"nav navbar-nav\">\n      <li [ngClass]=\"{'active':i == currentNav}\" *ngFor=\"let tournament of tournaments;let i=index;\">\n        <a  (click)=\"setCurrentTournament(tournament.id,i)\" >{{tournament.category}}</a>\n      </li>\n    </ul>\n  </nav>\n\n</div>\n\n<div id=\"listaOpcoes\" *ngIf=\"currentTournament\">\n  <h1>\n    {{currentTournament.name}}\n  </h1>\n  <ul class=\"nav nav-pills\">\n    <li *ngFor=\"let fase of currentTournament.stages\" (click)=\"setCurrentStage($event,fase)\" [ngClass]=\"{'active': currentStage.name==fase.name}\">\n      <a href=\"#\">{{fase.name}}</a>\n    </li>\n    <li>\n      <label class=\"form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"mode\" [value]=\"'Musica 1'\" [(ngModel)]=\"fieldValue\"> Musica 1\n      </label>\n      <label class=\"form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"mode\" [value]=\"'Musica 2'\" [(ngModel)]=\"fieldValue\"> Musica 2\n      </label>\n    </li>\n  </ul>\n\n  <!-- Table -->\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Nome</th>\n        <th>Música</th>\n        <th>Score</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr [@fadeIn]=\"''\" [ngClass]=\"{'bg-primary':performance.scoreChanged}\" *ngFor=\"let performance of performances |  filterBy:'song':fieldValue | myNewPipe:currentStage.name | sortByScore\">\n        <td>{{performance.player.name}}</td>\n        <td>{{performance.song}}</td>\n        <td>{{performance.score}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/resultado/resultado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_torneio_service__ = __webpack_require__("../../../../../src/app/services/torneio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultadoComponent = (function () {
    function ResultadoComponent(torneioService, socket) {
        this.torneioService = torneioService;
        this.socket = socket;
        this.performances = [];
        this.name = "";
        this.grupoDaFase = "";
        this.ordem = 0;
        this.fieldValue = "Musica 1";
        this.category = false;
        this.options = false;
        this.op1 = false;
        this.op2 = false;
        this.op3 = false;
        this.tournaments = [];
        this.currentNav = 0;
    }
    ResultadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.torneioService.getAllTournaments().subscribe(function (res) {
            console.log(res.json());
            _this.tournaments = res.json();
            _this.socket.on("score-update")
                .subscribe(function (data) {
                _this.updateScore(data);
            });
        });
    };
    ResultadoComponent.prototype.updateScore = function (data) {
        var _this = this;
        console.log("data", data);
        this.performances.forEach(function (item, index) {
            console.log("item", item);
            if (item.id == data.id) {
                _this.performances[index].score = data.score;
                _this.performances[index].scoreChanged = true;
                setTimeout(function () {
                    _this.performances[index].scoreChanged = false;
                }, 400);
            }
        });
    };
    ResultadoComponent.prototype.showCategory = function () {
        if (!this.category) {
            this.category = true;
        }
        else {
            this.category = false;
        }
        return this.category;
    };
    ResultadoComponent.prototype.showOptions = function () {
        if (!this.options) {
            this.category = true;
            this.options = true;
        }
        else {
            this.options = false;
        }
        return this.category;
    };
    ResultadoComponent.prototype.setCurrentTournament = function (tournament, index) {
        var _this = this;
        this.currentNav = index;
        this.torneioService.getPerformancesByTournament(tournament).subscribe(function (res) {
            _this.performances = res.json();
            console.log(_this.performances.length);
        });
        this.torneioService.getTournamentById(tournament).subscribe(function (res) {
            console.log(res.json());
            _this.currentTournament = res.json();
            _this.currentStage = _this.currentTournament.stages[0];
        });
    };
    ResultadoComponent.prototype.setCurrentStage = function (event, stage) {
        event.preventDefault();
        this.currentStage = stage;
    };
    ResultadoComponent.prototype.deletePerformance = function (performance) {
        var _this = this;
        this.torneioService.deletePerformance(performance.id).subscribe(function (res) {
            var index = _this.performances.indexOf(performance);
            delete _this.performances[index];
        });
    };
    ResultadoComponent.prototype.cadastrarNaFase = function (player) {
        var _this = this;
        this.torneioService.cadastrarPlayerNaFase({
            player: player.id,
            modifier: { group: this.grupoDaFase, stage: this.currentStage.name },
            song: "Musica 1",
            score: -1,
            tournament: this.currentTournament.id,
            ordem: this.ordem
        }).subscribe(function (res) {
            var performanceNow = res.json();
            performanceNow.player = player;
            _this.performances.push(performanceNow);
            _this.torneioService.cadastrarPlayerNaFase({
                player: player.id,
                modifier: { group: _this.grupoDaFase, stage: _this.currentStage.name },
                song: "Musica 2",
                score: -1,
                tournament: _this.currentTournament.id,
                ordem: _this.ordem
            }).subscribe(function (res) {
                var performanceNow = res.json();
                performanceNow.player = player;
                _this.performances.push(performanceNow);
            });
        });
    };
    ResultadoComponent.prototype.submitScore = function (performance) {
        this.torneioService.editPerformance(performance).subscribe(function (res) {
            alert("score enviado");
        });
    };
    ResultadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resultado',
            template: __webpack_require__("../../../../../src/app/pages/resultado/resultado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/resultado/resultado.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('1s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: '1' })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_torneio_service__["a" /* TorneioService */],
            __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], ResultadoComponent);
    return ResultadoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/torneios/torneios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/torneios/torneios.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"listaTorneios\">\n\n  <a href=\"#\" class=\"btn btn-primary\" (click)=\"showCategory()\">BRPF 2017</a>\n  <br>\n  <br>\n\n</div>\n\n<div id=\"listaCategorias\" *ngIf=\"category\">\n\n  <a href=\"#\" class=\"btn btn-primary\" (click)=\"setCurrentTournament(tournament.id)\" *ngFor=\"let tournament of tournaments\">{{tournament.category}}</a>\n  <br>\n  <br>\n</div>\n\n<div id=\"listaOpcoes\" *ngIf=\"currentTournament\">\n  <h1>\n    {{currentTournament.name}}\n  </h1>\n  <ul class=\"nav nav-pills\">\n    <li *ngFor=\"let fase of currentTournament.stages\" (click)=\"setCurrentStage($event,fase)\" [ngClass]=\"{'active': currentStage.name==fase.name}\">\n      <a href=\"#\" href=\"#\">{{fase.name}}</a>\n    </li>\n  </ul>\n\n\n  <!-- Table -->\n  <table class=\"table\">\n    <thead>\n      <tr>\n\n        <th>Nome</th>\n        <th>Score</th>\n\n        <th>Música</th>\n        <th>Ordem</th>\n        <th>Deletar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let performance of performances|myNewPipe:currentStage.name\">\n\n        <td>{{performance.player.name}}</td>\n        <td class=\"form-inline\">\n          <input class=\"form-control\" [(ngModel)]=\"performance.score\">\n          <a href=\"#\" class=\"btn btn-success\" (click)=submitScore(performance)>Enviar</a>\n        </td>\n        <td>{{performance.song}}</td>\n        <td>{{performance.ordem}}</td>\n        <td>\n          <a href=\"#\" class=\"btn btn-danger\" (click)=deletePerformance(performance)>Delete</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"\">\n\n    <input placeholder=\"buscar player\" class=\"form-control\" [(ngModel)]=\"name\">\n  </div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Nome</th>\n        <th>Grupo</th>\n        <th>Ordem de Jogada</th>\n        <th>Cadastrar na Fase selecionada</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let player of currentTournament.competitors |filterBy:'name':name\">\n        <td>{{player.name}}</td>\n        <td class=\"form-inline\">\n          <input class=\"form-control\" [(ngModel)]=\"grupoDaFase\">\n        </td>\n        <td class=\"form-inline\">\n          <input class=\"form-control\" [(ngModel)]=\"ordem\">\n        </td>\n        <td>\n          <a href=\"#\" class=\"btn btn-success\" (click)=\"cadastrarNaFase(player)\">Cadastrar na fase</a>\n        </td>\n\n      </tr>\n    </tbody>\n  </table>\n\n  <a href=\"#\" class=\"btn btn-primary\" class=\"btn btn-primary\" (click)=\"showMenu(1)\">Cadastrar música da fase</a>\n  <a href=\"#\" class=\"btn btn-primary\" (click)=\"showMenu(2)\">Cadastrar players da fase</a>\n  <a href=\"#\" class=\"btn btn-primary\" (click)=\"showMenu(3)\">Enviar pontuação das fases</a>\n  <br>\n  <br>\n\n  <div *ngIf=\"op1\" id=\"cadastroMusica\">\n    <form>\n      Nome\n      <input type=\"text\">\n      <br>\n      <br> Level\n      <input type=\"text\">\n      <br>\n      <br>\n      <input type=\"radio\" name=\"faseCamp\" value=\"1fase\" checked> 1ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"2fase\"> 2ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"3fase\"> 3ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"semi\"> Semi-Final\n      <input type=\"radio\" name=\"faseCamp\" value=\"final\"> Final\n      <br>\n      <br>\n\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveA\"> Chave A\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveB\"> Chave B\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveC\"> Chave C\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveD\"> Chave D\n      <br>\n      <br>\n      <small>Obs: Em caso de campeonato sem chave, cadastrar como chave A</small>\n\n      <br>\n      <br>\n      <input type=\"submit\" value=\"Cadastrar música\">\n    </form>\n  </div>\n  <div *ngIf=\"op2\" id=\"cadastroPlayer\">\n    <form>\n      Player\n      <input type=\"text\">\n      <br>\n      <br>\n      <input type=\"radio\" name=\"faseCamp\" value=\"1fase\" checked> 1ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"2fase\"> 2ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"3fase\"> 3ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"semi\"> Semi-Final\n      <input type=\"radio\" name=\"faseCamp\" value=\"final\"> Final\n      <br>\n      <br>\n\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveA\"> Chave A\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveB\"> Chave B\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveC\"> Chave C\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveD\"> Chave D\n      <br>\n      <br>\n      <small>Obs: Em caso de campeonato sem chave, cadastrar como chave A</small>\n\n      <br>\n      <br>\n      <input type=\"submit\" value=\"Cadastrar música\">\n    </form>\n  </div>\n  <div *ngIf=\"op3\" id=\"envioPontos\">\n    <form>\n      Player\n      <input type=\"text\">\n      <br>\n      <br> Score\n      <input type=\"text\">\n      <br>\n      <br>\n      <input type=\"radio\" name=\"ordemMusica\" value=\"musica1\"> Música 1\n      <input type=\"radio\" name=\"ordemMusica\" value=\"musica2\"> Música 2\n      <br>\n      <br>\n\n      <input type=\"radio\" name=\"faseCamp\" value=\"1fase\" checked> 1ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"2fase\"> 2ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"3fase\"> 3ª Fase\n      <input type=\"radio\" name=\"faseCamp\" value=\"semi\"> Semi-Final\n      <input type=\"radio\" name=\"faseCamp\" value=\"final\"> Final\n      <br>\n      <br>\n\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveA\"> Chave A\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveB\"> Chave B\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveC\"> Chave C\n      <input type=\"radio\" name=\"chaveCamp\" value=\"chaveD\"> Chave D\n      <br>\n      <br>\n      <small>Obs: Em caso de campeonato sem chave, cadastrar como chave A</small>\n\n      <br>\n      <br>\n      <input type=\"submit\" value=\"Cadastrar música\">\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/torneios/torneios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorneiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_torneio_service__ = __webpack_require__("../../../../../src/app/services/torneio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TorneiosComponent = (function () {
    function TorneiosComponent(torneioService) {
        this.torneioService = torneioService;
        this.performances = [];
        this.name = "";
        this.grupoDaFase = "";
        this.ordem = 0;
        this.category = false;
        this.options = false;
        this.op1 = false;
        this.op2 = false;
        this.op3 = false;
        this.tournaments = [];
    }
    TorneiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.torneioService.getAllTournaments().subscribe(function (res) {
            console.log(res.json());
            _this.tournaments = res.json();
        });
    };
    TorneiosComponent.prototype.showCategory = function () {
        if (!this.category) {
            this.category = true;
        }
        else {
            this.category = false;
        }
        return this.category;
    };
    TorneiosComponent.prototype.showOptions = function () {
        if (!this.options) {
            this.category = true;
            this.options = true;
        }
        else {
            this.options = false;
        }
        return this.category;
    };
    TorneiosComponent.prototype.setCurrentTournament = function (tournament) {
        var _this = this;
        this.torneioService.getPerformancesByTournament(tournament).subscribe(function (res) {
            _this.performances = res.json();
            console.log(_this.performances.length);
        });
        this.torneioService.getTournamentById(tournament).subscribe(function (res) {
            console.log(res.json());
            _this.currentTournament = res.json();
            _this.currentStage = _this.currentTournament.stages[0];
        });
    };
    TorneiosComponent.prototype.setCurrentStage = function (event, stage) {
        event.preventDefault();
        this.currentStage = stage;
    };
    TorneiosComponent.prototype.deletePerformance = function (performance) {
        var _this = this;
        this.torneioService.deletePerformance(performance.id).subscribe(function (res) {
            var index = _this.performances.indexOf(performance);
            delete _this.performances[index];
        });
    };
    TorneiosComponent.prototype.cadastrarNaFase = function (player) {
        var _this = this;
        this.torneioService.cadastrarPlayerNaFase({
            player: player.id,
            modifier: { group: this.grupoDaFase, stage: this.currentStage.name },
            song: "Musica 1",
            score: -1,
            tournament: this.currentTournament.id,
            ordem: this.ordem
        }).subscribe(function (res) {
            var performanceNow = res.json();
            performanceNow.player = player;
            _this.performances.push(performanceNow);
            _this.torneioService.cadastrarPlayerNaFase({
                player: player.id,
                modifier: { group: _this.grupoDaFase, stage: _this.currentStage.name },
                song: "Musica 2",
                score: -1,
                tournament: _this.currentTournament.id,
                ordem: _this.ordem
            }).subscribe(function (res) {
                var performanceNow = res.json();
                performanceNow.player = player;
                _this.performances.push(performanceNow);
            });
        });
    };
    TorneiosComponent.prototype.submitScore = function (performance) {
        this.torneioService.editPerformance(performance).subscribe(function (res) {
            alert("score enviado");
        });
    };
    TorneiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-torneios',
            template: __webpack_require__("../../../../../src/app/pages/torneios/torneios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/torneios/torneios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_torneio_service__["a" /* TorneioService */]])
    ], TorneiosComponent);
    return TorneiosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter-by-score.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByScorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByScorePipe = (function () {
    function FilterByScorePipe() {
    }
    FilterByScorePipe.prototype.transform = function (items, field, value) {
        if (!items)
            return items;
        value = this.escapeRegExp(value);
        return items.filter(function (item) { return new RegExp(value, 'g').test(item[field].toLowerCase()); });
    };
    FilterByScorePipe.prototype.escapeRegExp = function (string) {
        if (string === void 0) { string = ''; }
        string = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $ & means the whole matched string
        return string.toString().toLowerCase();
    };
    FilterByScorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filterBy',
            pure: false
        })
    ], FilterByScorePipe);
    return FilterByScorePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/my-new-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyNewPipePipe = (function () {
    function MyNewPipePipe() {
    }
    MyNewPipePipe.prototype.transform = function (performances, stage) {
        return performances.filter(function (performance) { return performance.modifier.stage == stage; });
    };
    MyNewPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'myNewPipe',
            pure: false
        })
    ], MyNewPipePipe);
    return MyNewPipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/name-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NamePipePipe = (function () {
    function NamePipePipe() {
    }
    NamePipePipe.prototype.transform = function (players, name) {
        return players.filter(function (player) { return player.name.indexOf(name) == 0; });
    };
    NamePipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'namePipe',
            pure: false
        })
    ], NamePipePipe);
    return NamePipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/sort-by-score.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByScorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByScorePipe = (function () {
    function SortByScorePipe() {
    }
    SortByScorePipe.prototype.transform = function (items) {
        return items.sort(function (a, b) {
            if (a.score > b.score) {
                return -1;
            }
            if (a.score < b.score) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SortByScorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sortByScore',
            pure: false
        })
    ], SortByScorePipe);
    return SortByScorePipe;
}());



/***/ }),

/***/ "../../../../../src/app/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"showPlayer()\">Cadastrar novo player</button><br><br>\n\n<div id=\"cadastroPlayer\" *ngIf=\"player\">\n  <form> \n    Nome: <input type=\"text\"><br><br>\n    Categoria: <br>\n    <input type=\"radio\" name=\"categoria\" value=\"masculino\" checked> Masculino<br>\n    <input type=\"radio\" name=\"categoria\" value=\"feminino\"> Feminino<br>\n    <input type=\"radio\" name=\"categoria\" value=\"intermediario\"> Intermediário\n\n    <br><br><input type=\"submit\" value=\"Cadastrar\">\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = (function () {
    function PlayerComponent() {
        this.player = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.showPlayer = function () {
        if (!this.player) {
            this.player = true;
        }
        else {
            this.player = false;
        }
        return this.player;
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("../../../../../src/app/player/player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService() {
        this._path = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].origin;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](this._path);
    }
    SocketService.prototype.emmit = function (event, data) {
        this.socket.emmit(event, data);
    };
    SocketService.prototype.broadcast = function (event, data) {
        this.socket.broadcast.emmit(event, data);
    };
    SocketService.prototype.on = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on(event, function (data) { return observer.next(data); });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/torneio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorneioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TorneioService = (function () {
    function TorneioService(http) {
        this.http = http;
        this.urlTournament = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].origin + '/tournaments';
        this.urlPerformances = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].origin + '/performances';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZWI5MDkyNTEyZjU2MGY0NDZhN2ZkOCIsImlhdCI6MTUwODYxMjEzOX0.nGGLHnEJ-llGnZOTxxWiK_gAPwgX_Sti0g_aHN5BaUo");
    }
    TorneioService.prototype.getAllTournaments = function () {
        return this.http.get(this.urlTournament);
    };
    TorneioService.prototype.getTournamentById = function (id) {
        return this.http.get(this.urlTournament + '/' + id);
    };
    TorneioService.prototype.getPerformancesByTournament = function (id) {
        return this.http.get(this.urlPerformances + '?tournament=' + id + '&sort=-score');
    };
    TorneioService.prototype.editPerformance = function (performance) {
        return this.http.put(this.urlPerformances + '/' + performance.id, { score: performance.score }, { headers: this.headers });
    };
    TorneioService.prototype.deletePerformance = function (id) {
        return this.http.delete(this.urlPerformances + '/' + id, { headers: this.headers });
    };
    TorneioService.prototype.cadastrarPlayerNaFase = function (performance) {
        return this.http.post(this.urlPerformances, performance, { headers: this.headers });
    };
    TorneioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TorneioService);
    return TorneioService;
}());



/***/ }),

/***/ "../../../../../src/assets/1.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/2.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/3.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    origin: "http://138.197.73.248:9000"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map