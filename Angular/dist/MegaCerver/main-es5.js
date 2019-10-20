(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isAutorized(); else notAuthorized\">\r\n    <app-side-nav-inner-toolbar>\r\n        <router-outlet></router-outlet>\r\n        <app-footer></app-footer>\r\n    </app-side-nav-inner-toolbar>\r\n</ng-container>\r\n\r\n<ng-template #notAuthorized>\r\n    <app-login-form></app-login-form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/advance-card/advance-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/advance-card/advance-card.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin: 20px; max-width: 600px\" (click)=\"openPopup()\">\r\n  <div class=\"container\">\r\n    <p></p>\r\n    <b style=\"font-size: 1.2em\">{{ advance.name }}</b>\r\n    <p>{{ advance.description }}</p>\r\n    <p>Cost: {{ advance.currentPrice }}</p>\r\n  </div>\r\n</div>\r\n<app-advance-popup [(visible)]=\"showPopup\" [advance]=\"advance\"></app-advance-popup>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/advance-popup/advance-popup.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/advance-popup/advance-popup.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup [(visible)]=\"visible\" width=\"auto\" height=\"auto\" maxWidth=\"600px\">\r\n<!--  <img src=\"img_avatar.png\" alt=\"Avatar\" style=\"width:100%\">-->\r\n  <div class=\"container\">\r\n    <p></p>\r\n    <b style=\"font-size: 1.1em\">{{ advance.name }}</b>\r\n    <p>{{ advance.description }}</p>\r\n    <p>Current oost: {{ advance.currentPrice }}</p>\r\n    <p>Original cost: {{ advance.cost }}</p>\r\n    <p>Victory points: {{ advance.points }}</p>\r\n    <p>Type: {{ advancesService.getAdvanceTypeName(advance.type1) }}</p>\r\n    <p *ngIf=\"advance.type2\">Secondary type: {{ advancesService.getAdvanceTypeName(advance.type2) }}</p>\r\n    <p *ngIf=\"advance.discountToCivics\">Discount To Civics: {{ advance.discountToCivics }}</p>\r\n    <p *ngIf=\"advance.discountToCrafts\">Discount To Crafts: {{ advance.discountToCrafts }}</p>\r\n    <p *ngIf=\"advance.discountToReligion\">Discount To Religion: {{ advance.discountToReligion }}</p>\r\n    <p *ngIf=\"advance.discountToScience\">Discount To Science: {{ advance.discountToScience }}</p>\r\n    <p *ngIf=\"advance.discountToArts\">Discount To Arts: {{ advance.discountToArts }}</p>\r\n    <p *ngIf=\"advance.discountFromCard\">Discount From Card: {{ advancesService.getAdvance(advance.discountFromCard).name }}</p>\r\n    <p *ngIf=\"advance.discountFromCardAmount\">Discount From Card Amount: {{ advance.discountFromCardAmount }}</p>\r\n    <p *ngIf=\"advance.discountToCard\">Discount To Card: {{ advancesService.getAdvance(advance.discountToCard).name }}</p>\r\n    <p *ngIf=\"advance.discountToCardAmount\">Discount To Card Amount: {{ advance.discountToCardAmount }}</p>\r\n  </div>\r\n  <dx-button type=\"default\" (onClick)=\"buyAdvance()\">KOPEN</dx-button>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-drawer\r\n    class=\"drawer\"\r\n    position=\"before\"\r\n    [closeOnOutsideClick]=\"shaderEnabled\"\r\n    [openedStateMode]=\"menuMode\"\r\n    [revealMode]=\"menuRevealMode\"\r\n    [minSize]=\"minMenuSize\"\r\n    [shading]=\"shaderEnabled\"\r\n    [(opened)]=\"menuOpened\">\r\n\r\n    <app-side-navigation-menu\r\n        [items]=\"menuItems\"\r\n        [compactMode]=\"!menuOpened\"\r\n        [selectedItem]=\"selectedRoute\"\r\n        class=\"dx-swatch-additional\"\r\n        *dxTemplate=\"let dataMenu of 'panel'\"\r\n        (selectedItemChanged)=\"navigationChanged($event)\"\r\n        (openMenu)=\"navigationClick()\">\r\n            <dx-toolbar id=\"navigation-header\">\r\n                <dxi-item\r\n                    *ngIf=\"minMenuSize !== 0\"\r\n                    location=\"before\"\r\n                    cssClass=\"menu-button\"\r\n                    widget=\"dxButton\"\r\n                    [options]=\"{\r\n                        icon: 'menu',\r\n                        stylingMode: 'text',\r\n                        onClick: toggleMenu\r\n                    }\">\r\n                </dxi-item>\r\n                <dxi-item\r\n                    location=\"before\"\r\n                    cssClass=\"header-title\"\r\n                    [text]=\"title\">\r\n                </dxi-item>\r\n            </dx-toolbar>\r\n    </app-side-navigation-menu>\r\n\r\n    <div class=\"container\">\r\n        <app-header\r\n            [menuToggleEnabled]=\"minMenuSize === 0\"\r\n            (menuToggle)=\"menuOpened = !menuOpened;\">\r\n        </app-header>\r\n\r\n        <dx-scroll-view class=\"layout-body full-height-scrollable\">\r\n            <div class=\"content\">\r\n                <ng-content></ng-content>\r\n            </div>\r\n\r\n            <div class=\"content-block\">\r\n                <ng-content select=\"app-footer\"></ng-content>\r\n            </div>\r\n        </dx-scroll-view>\r\n    </div>\r\n</dx-drawer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/single-card/single-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/single-card/single-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-scroll-view height=\"100%\" class=\"full-height-scrollable\">\r\n    <div class=\"dx-card\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</dx-scroll-view>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/actions/actions.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/actions/actions.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Fase {{ gameService.game.phase }} ({{ gameService.getPhaseName() }})</h2>\r\n\r\n<div class=\"content-block dx-card responsive-paddings\">\r\n    <div *ngIf=\"gameService.game.phase === 1\">\r\n        Cities on board: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().citiesOnBoard\" [readOnly]=\"true\"\r\n            [max]=\"9\" [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Tax rate: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().taxRate\" (onValueChanged)=\"taxRateChanged();\"\r\n            [readOnly]=\"gameService.getCurrentPlayer().isReady || !(gameService.getCurrentPlayer().hasCoinage || gameService.getCurrentPlayer().hasMonarchy)\"\r\n            [max]=\"gameService.getCurrentPlayer().hasCoinage || gameService.getCurrentPlayer().hasMonarchy ?\r\n             gameService.getCurrentPlayer().hasCoinage && gameService.getCurrentPlayer().hasMonarchy ? 4 : 3 : 2\"\r\n            [min]=\"gameService.getCurrentPlayer().hasCoinage ? 1 : 2\" [showSpinButtons]=\"true\" width=\"50px\">\r\n        </dx-number-box><br>\r\n        Tax collected: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().collectedTax\" [readOnly]=\"true\"\r\n            [max]=\"18\" [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Treasury: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensInTreasury\" [readOnly]=\"true\"\r\n            [max]=\"55\" [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        <div style=\"color: red\" *ngIf=\"gameService.getCurrentPlayer().hasTaxRevolt\">\r\n            TAX REVOLT!\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 2 || gameService.game.phase === 5 || gameService.game.phase === 11\">\r\n        Tokens on board: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensOnBoard\"\r\n            (onValueChanged)=\"unitsChanged();\" [readOnly]=\"gameService.getCurrentPlayer().isReady\" [max]=\"55\" [min]=\"0\"\r\n            [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Tokens in stock: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensInStock\"\r\n            (onValueChanged)=\"stockChanged();\" [readOnly]=\"gameService.getCurrentPlayer().isReady\" [max]=\"55\" [min]=\"0\"\r\n            [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Treasury: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensInTreasury\" [readOnly]=\"true\"\r\n            [max]=\"55\" [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Cities on board: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().citiesOnBoard\"\r\n            (onValueChanged)=\"citiesOnBoardChanged();\" [readOnly]=\"gameService.getCurrentPlayer().isReady\" [max]=\"9\"\r\n            [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Cities in stock: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().citiesInStock\" [readOnly]=\"true\"\r\n            [max]=\"9\" [min]=\"0\" width=\"50px\"></dx-number-box><br>\r\n        <div style=\"color: red\"\r\n            *ngIf=\"!(gameService.getCurrentPlayer().tokensOnBoard >= gameService.getCurrentPlayer().citiesOnBoard * (gameService.getCurrentPlayer().hasCulturalAscendancy ? 3 : 2))\">\r\n            Je hebt niet genoeg tokens op het bord om je steden te ondersteunen!\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 3\">\r\n        Your place in queue: {{ gameService.getCurrentPlayer().censusOrder }}\r\n        <br>\r\n        Players left in front of you: {{ gameService.playersInFrontOfCurrentPlayerInQueue }}\r\n        <br>\r\n        Countdown: {{ gameService.countDownVisibleString }}\r\n        <br><br>\r\n\r\n        Ships on board: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().shipsOnBoard\"\r\n            [readOnly]=\"gameService.getCurrentPlayer().isReady\" [max]=\"4\" [min]=\"0\" [showSpinButtons]=\"true\"\r\n            width=\"50px\"></dx-number-box><br>\r\n        Treasury difference: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().treasuryDifference\"\r\n            [readOnly]=\"gameService.getCurrentPlayer().isReady || gameService.getCurrentPlayer().shipsOnBoard === 0\"\r\n            [max]=\"0\" [min]=\"-1 * gameService.getCurrentPlayer().tokensInTreasury\" [showSpinButtons]=\"true\"\r\n            width=\"50px\"></dx-number-box><br>\r\n        Treasury: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensInTreasury\" [readOnly]=\"true\"\r\n            [max]=\"55\" [min]=\"0\" width=\"50px\"></dx-number-box><br>\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 4\">\r\n        Treasury won: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().treasuryDifference\"\r\n            [readOnly]=\"gameService.getCurrentPlayer().isReady\" [max]=\"gameService.getCurrentPlayer().tokensInStock\"\r\n            [min]=\"0\" [showSpinButtons]=\"true\" width=\"50px\"></dx-number-box><br>\r\n        Tokens in stock: <dx-number-box [(value)]=\"gameService.getCurrentPlayer().tokensInStock\" [readOnly]=\"true\"\r\n            [max]=\"55\" [min]=\"0\" width=\"50px\"></dx-number-box><br>\r\n    </div>\r\n    <!-- Fase 5 zit bij 2 -->\r\n    <div *ngIf=\"gameService.game.phase === 6\">\r\n        Fase 6\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 7\">\r\n        Countdown: {{ gameService.countDownVisibleString }}\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 8\">\r\n        Fase 8\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 9\">\r\n        Fase 9\r\n    </div>\r\n    <div *ngIf=\"gameService.game.phase === 10\">\r\n        Fase 10\r\n    </div>\r\n    <!-- Fase 11 zit bij 2 -->\r\n    <div *ngIf=\"gameService.game.phase === 12\">\r\n        Fase 12\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"gameService.playerIndex === 0 || true; else notAuthorized\">\r\n    <h2 class=\"content-block\">Admin</h2>\r\n    <div class=\"content-block\">\r\n        <div class=\"dx-card responsive-paddings\">\r\n\r\n            <dx-data-grid class=\"dx-card wide-card\" [dataSource]=\"gameService.game.players\" [showColumnLines]=\"true\"\r\n                [showRowLines]=\"false\" [showBorders]=\"true\" [rowAlternationEnabled]=\"true\" [focusedRowEnabled]=\"false\"\r\n                [columnAutoWidth]=\"true\" [columnHidingEnabled]=\"false\">\r\n                <dxo-column-chooser></dxo-column-chooser>\r\n                <dxo-paging [pageSize]=\"20\"></dxo-paging>\r\n                <dxo-pager [showPageSizeSelector]=\"false\" [showInfo]=\"true\"></dxo-pager>\r\n                <dxo-filter-row [visible]=\"false\"></dxo-filter-row>\r\n                <dxo-editing [allowUpdating]=\"true\" mode=\"cell\"></dxo-editing>\r\n\r\n                <dxi-column dataField=\"isActive\" [width]=\"0\" [selectedFilterOperation]=\"'='\" [filterValue]=\"true\">\r\n                </dxi-column>\r\n                <dxi-column dataField=\"civilizationName\" caption=\"Civilization\"></dxi-column>\r\n                <dxi-column dataField=\"playerName\" caption=\"Speler\"></dxi-column>\r\n                <dxi-column dataField=\"censusOrder\" caption=\"Volgorde\"></dxi-column>\r\n                <dxi-column dataField=\"score\" caption=\"score\"></dxi-column>\r\n                <dxi-column dataField=\"isReady\" caption=\"Ready\"></dxi-column>\r\n                <dxi-column dataField=\"citiesOnBoard\" caption=\"Steden\"></dxi-column>\r\n                <dxi-column dataField=\"tokensOnBoard\" caption=\"units\"></dxi-column>\r\n                <dxi-column dataField=\"tokensInStock\" caption=\"stock\"></dxi-column>\r\n                <dxi-column dataField=\"tokensInTreasury\" caption=\"treasury\"></dxi-column>\r\n                <dxi-column dataField=\"hasTaxRevolt\" caption=\"Tax Revolt\"></dxi-column>\r\n                <dxi-column dataField=\"taxRate\" caption=\"taxRate\"></dxi-column>\r\n                <dxi-column dataField=\"hasMonarchy\" caption=\"Monarchy\"></dxi-column>\r\n                <dxi-column dataField=\"hasCoinage\" caption=\"Coinage\"></dxi-column>\r\n                <dxi-column dataField=\"treasuryDifference\" caption=\"Treasury won\"></dxi-column>\r\n                <dxi-column dataField=\"hasAdvancedMilitary\" caption=\"Advanded Military\"></dxi-column>\r\n                <dxi-column dataField=\"hasEngineering\" caption=\"Engineering\"></dxi-column>\r\n                <dxi-column dataField=\"hasMetalWorking\" caption=\"Metal Working\"></dxi-column>\r\n                <dxi-column dataField=\"hasNavalWarfare\" caption=\"Naval Warfare\"></dxi-column>\r\n\r\n            </dx-data-grid>\r\n\r\n\r\n            <dx-button *ngIf=\"!gameService.game.hasStarted\" (onClick)=\"startGame()\" type=\"default\">Start game</dx-button>\r\n            <dx-button (onClick)=\"nextPhase()\" type=\"normal\" [disabled]=\"!gameService.everybodyIsReady()\">Next phase</dx-button>\r\n            <dx-button (onClick)=\"sendChanges()\" type=\"default\">Send changes</dx-button>\r\n\r\n            <br><br>\r\n            <dx-button (onClick)=\"resetGame()\" type=\"warning\">Reset game</dx-button>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-template #notAuthorized>\r\n    <h2 class=\"content-block\">Admin</h2>\r\n    <div class=\"content-block\">\r\n        <div class=\"dx-card responsive-paddings\">\r\n            Voor deze pagina moet je admin zijn.\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/advances/advances.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/advances/advances.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Advances:</h2>\r\n<div class=\"content-block\">\r\n  <h6>Available: </h6>\r\n  <app-advance-card *ngFor=\"let advance of advancesService.availableAdvances\" [advance]=\"advance\"></app-advance-card>\r\n  <h6>Owned: </h6>\r\n  <app-advance-card *ngFor=\"let ownedAdvance of advancesService.ownedAdvances\" [advance]=\"ownedAdvance\"></app-advance-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gamescreen/gamescreen.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gamescreen/gamescreen.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\"></h2>\r\n\r\n<dx-data-grid class=\"dx-card wide-card\" [dataSource]=\"gameService.game.players\" [showColumnLines]=\"true\"\r\n    [showRowLines]=\"false\" [showBorders]=\"true\" [rowAlternationEnabled]=\"true\" [focusedRowEnabled]=\"false\"\r\n    [columnAutoWidth]=\"true\" [columnHidingEnabled]=\"false\">\r\n\r\n    <dxo-paging [pageSize]=\"20\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"false\" [showInfo]=\"true\"></dxo-pager>\r\n    <dxo-filter-row [visible]=\"false\"></dxo-filter-row>\r\n    <dxo-editing [allowUpdating]=\"true\" mode=\"cell\"></dxo-editing>\r\n    \r\n    <ng-container *ngIf=\"gameService.game.phase === 0\">\r\n        <dxi-column dataField=\"isReady\" caption=\"Ready\"></dxi-column>\r\n        <dxi-column dataField=\"isActive\" [width]=\"0\" [selectedFilterOperation]=\"'='\" [filterValue]=\"true\"></dxi-column>\r\n        <dxi-column dataField=\"playerName\" caption=\"Speler\"></dxi-column>\r\n        <dxi-column dataField=\"score\" caption=\"score\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 1\">\r\n        <dxi-column dataField=\"citiesOnBoard\" [width]=\"80\" caption=\"cities\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"hasTaxRevolt\" [width]=\"100\" caption=\"tax revolt\" cellTemplate=\"taxRevolt\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"200\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"taxRate\" [width]=\"80\" caption=\"tax rate\"></dxi-column>\r\n        <dxi-column dataField=\"\" [width]=\"80\" caption=\"tax collected\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" [width]=\"80\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column *ngIf=\"false\" dataField=\"hasMonarchy\" [width]=\"170\" caption=\"MONARCHY\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"hasCoinage\" [width]=\"170\" caption=\"COINAGE\"></dxi-column>\r\n        <div *dxTemplate=\"let item of 'taxRevolt'\">\r\n            <div style=\"background-color: red; color: white\">\r\n                {{ item.data.hasTaxRevolt ? 'TAX REVOLT' : '' }}\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 2\">\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"170\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"tokensOnBoard\" [width]=\"100\" caption=\"tokens\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInStock\" [width]=\"100\" caption=\"stock\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" [width]=\"100\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column dataField=\"citiesOnBoard\" [width]=\"100\" caption=\"cities\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 3\">\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"MILITARY\"></dxi-column>\r\n        <dxi-column dataField=\"tokensOnBoard\" [width]=\"100\" caption=\"tokens\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"200\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" [width]=\"100\" caption=\"time\"></dxi-column>\r\n        <dxi-column dataField=\"\" [width]=\"100\" caption=\"treasury used\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"CLOTH MAKING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"ASTRONAVIGATION\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"DIPLOMACY\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"NAVAL WARFARE\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"ROADBUILDING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"180\" caption=\"CULTURAL ASCENDANCY\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 4\">\r\n        <dxi-column [visible]=\"true\" dataField=\"hasAdvancedMilitary\"  [width]=\"150\" caption=\"ADVANCED MILITARY\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"hasEngineering\" [width]=\"150\" caption=\"ENGINEERING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"hasMetalWorking\" [width]=\"150\" caption=\"METAL WORKING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"hasNavalWarfare\" [width]=\"150\" caption=\"NAVAL WARFARE\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"200\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"treasuryDifference\" [width]=\"100\" caption=\"treasury won\"></dxi-column>\r\n        <dxi-column dataField=\"treasuryDifference\" [width]=\"100\" caption=\"tradecards\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 5\">\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"CULTURAL ASCENDANCY\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"ARCHITECTURE\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"AGRICULTURE\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"PUBLIC WORKS\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"URBANISM\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"200\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"tokensOnBoard\" [width]=\"100\" caption=\"tokens\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInStock\" [width]=\"100\" caption=\"stock\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" [width]=\"100\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column dataField=\"citiesOnBoard\" [width]=\"150\" caption=\"cities\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 6\">\r\n        <dxi-column dataField=\"\" [width]=\"100\" caption=\"block\"></dxi-column>\r\n        <dxi-column dataField=\"citiesOnBoard\" [width]=\"100\" caption=\"cities\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" [width]=\"100\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"170\" caption=\"WONDER OF THE WORLD\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" [width]=\"200\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" [width]=\"150\" caption=\"tradecard lvl9 (15)\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"tradecard lvl8 (13)\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"tradecard lvl7 (13)\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"tradecard lvl6 (13)\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\" caption=\"tradecard lvl3 (9)\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" [width]=\"150\"  caption=\"tradecard lvl2 (5)\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 7\">\r\n        <dxi-column dataField=\"\" caption=\"block\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"tradecards\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"time left\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 8\">\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"calamities\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 9\">\r\n        <dxi-column dataField=\"\" caption=\"calamity\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"effect\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 10\">\r\n        <dxi-column dataField=\"\" caption=\"A.S.T.\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"DIASPORA\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"FUNDAMENTALISM\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"MONOTHEISM\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"POLITICS\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"PROVINCIAL EMPIRE\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"TRADE ROUTES\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"UNIVERSAL DOCTRINE\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 11\">\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"CULTURAL ASCENDANCY\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"ARCHITECTURE\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"PUBLIC WORKS\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"tokensOnBoard\" caption=\"tokens\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInStock\" caption=\"stock\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column dataField=\"citiesOnBoard\" caption=\"cities\"></dxi-column>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"gameService.game.phase === 12\">\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"MINING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"ROADBUILDING\"></dxi-column>\r\n        <dxi-column [visible]=\"true\" dataField=\"\" caption=\"TRADE EMPIRE\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"civics\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"crafts\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"religion\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"science\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"arts\"></dxi-column>\r\n        <dxi-column dataField=\"civilizationName\" caption=\"civilization\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"gold used\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"advances bought\"></dxi-column>\r\n        <dxi-column dataField=\"tokensInTreasury\" caption=\"treasury\"></dxi-column>\r\n        <dxi-column dataField=\"\" caption=\"tradecards\"></dxi-column>\r\n    </ng-container>\r\n</dx-data-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Testpagina:</h2>\r\n<div class=\"content-block\">\r\n    <div class=\"dx-card responsive-paddings\">\r\n\r\n    <div>civilization: {{ gameService.getCurrentPlayer().civilizationName }}</div>\r\n    <div>playerName: {{ gameService.getCurrentPlayer().playerName }}</div>\r\n\r\n    <div>countDown: {{ gameService.countDown }}</div>\r\n    <div>phase: {{ gameService.game.phase }}</div>\r\n    <div>turn: {{ gameService.game.turn }}</div>\r\n    <div>players[1].playerName: {{ gameService.game.players[1].playerName }}</div>\r\n\r\n    <dx-button (onClick)=\"changeTestValue()\">Test!</dx-button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/overview/overview.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/overview/overview.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\"></h2>\r\n\r\n<dx-data-grid class=\"dx-card wide-card\" [dataSource]=\"gameService.game.players\" [showBorders]=\"true\"\r\n    [focusedRowEnabled]=\"false\" [focusedRowIndex]=\"0\" [columnAutoWidth]=\"true\" [columnHidingEnabled]=\"false\" [rowAlternationEnabled]=\"true\">\r\n\r\n    <dxo-paging [pageSize]=\"20\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [showInfo]=\"true\"></dxo-pager>\r\n    <dxo-filter-row [visible]=\"false\"></dxo-filter-row>\r\n\r\n    <dxi-column dataField=\"isActive\" [width]=\"0\" [selectedFilterOperation]=\"'='\" [filterValue]=\"true\"></dxi-column>\r\n    <dxi-column dataField=\"civilizationName\" caption=\"Civilization\"></dxi-column>\r\n    <dxi-column dataField=\"playerName\" caption=\"Speler\"></dxi-column>\r\n    <dxi-column dataField=\"isReady\" caption=\"Ready\"></dxi-column>\r\n    <dxi-column dataField=\"citiesOnBoard\" caption=\"Steden\"></dxi-column>\r\n    <dxi-column dataField=\"score\" caption=\"score\"></dxi-column>\r\n    <dxi-column dataField=\"tokensOnBoard\" caption=\"units\"></dxi-column>\r\n    <dxi-column dataField=\"tokensInTreasury\" caption=\"treasury\"></dxi-column>\r\n    <dxi-column dataField=\"tokensInStock\" caption=\"stock\"></dxi-column>\r\n\r\n</dx-data-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-button *ngIf=\"!gameService.getCurrentPlayer().isReady\" type=\"success\" (onClick)=\"playerIsReady()\" width=\"200px\" [disabled]=\"gameService.disableReadyButton\">Ready</dx-button>\r\n<dx-button *ngIf=\"gameService.getCurrentPlayer().isReady\" type=\"danger\" (onClick)=\"playerIsNotReady()\" width=\"200px\">Toch niet ready</dx-button>\r\n\r\n<dx-button type=\"normal\" (onClick)=\"editPhase(-1)\" width=\"150px\">Previous Phase</dx-button>\r\n<dx-button type=\"normal\" (onClick)=\"editPhase(1)\" width=\"150px\">Next Phase</dx-button>\r\n\r\n<dx-button type=\"default\" (onClick)=\"test()\" width=\"150px\">TEST</dx-button>\r\n\r\n<!-- Countdown: {{ gameService.countDown }} -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <dx-toolbar class=\"header-toolbar\">\r\n        <dxi-item\r\n            *ngIf=\"menuToggleEnabled\"\r\n            location=\"before\"\r\n            widget=\"dxButton\"\r\n            cssClass=\"menu-button\"\r\n            [options]=\"{\r\n                icon: 'menu',\r\n                stylingMode: 'text',\r\n                onClick: toggleMenu\r\n            }\">\r\n        </dxi-item>\r\n        <dxi-item\r\n            location=\"before\"\r\n            cssClass=\"header-title\"\r\n            [text]=\"'Ronde: ' + this.gameService.game.turn + ', fase: ' + this.gameService.game.phase\">\r\n        </dxi-item>\r\n        <dxi-item\r\n            location=\"after\"\r\n            locateInMenu=\"auto\"\r\n            menuItemTemplate=\"menuItem\">\r\n            <div *dxTemplate=\"let data of 'item'\">\r\n                <dx-button\r\n                    class=\"user-button authorization\"\r\n                    width=\"170px\"\r\n                    height=\"100%\"\r\n                    stylingMode=\"text\">\r\n                    <div *dxTemplate=\"let data of 'content'\">\r\n                        <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"context\"></app-user-panel>\r\n                    </div>\r\n                </dx-button>\r\n            </div>\r\n        </dxi-item>\r\n        <div *dxTemplate=\"let data of 'menuItem'\">\r\n            <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"list\"></app-user-panel>\r\n        </div>\r\n    </dx-toolbar>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/login-form/login-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/login-form/login-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\r\n    <div class=\"login-header\">\r\n        <div class=\"title\">MegaCiv</div>\r\n        <div>Wat is je naam?</div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-text-box [(value)]=\"playerName\" placeholder=\"Naam\" width=\"100%\"></dx-text-box>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-button type=\"default\" text=\"OK\" (onClick)=\"showCivilizations()\" width=\"100%\"></dx-button>\r\n    </div>\r\n    <div *ngIf='showCivilizationButtons'>\r\n        <div class=\"dx-field\">\r\n            <a>Kies een volk:</a>\r\n        </div>\r\n        <div *ngFor=\"let player of gameService.game.players; let i = index\">\r\n            <div class=\"dx-field\"\r\n                *ngIf=\"(!gameService.game.hasStarted && !player.isActive) || player.playerName === playerName\">\r\n                <dx-button [type]=\"player.isActive ? 'default' : 'normal'\" [text]=\"player.civilizationName\" width=\"100%\"\r\n                    (onClick)=\"chooseCivilization(i)\"></dx-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</dx-validation-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n\r\n<div class=\"menu-container\">\r\n    <dx-tree-view\r\n        expandEvent=\"click\"\r\n        width=\"100%\"\r\n        [items]=\"items\"\r\n        (onInitialized)=\"onMenuInitialized($event)\"\r\n        (onItemClick)=\"onItemClick($event)\"\r\n        (onContentReady)=\"updateSelection($event)\"\r\n        (onSelectionChanged)=\"updateSelection($event)\"\r\n        [selectByClick]=\"true\"\r\n        selectionMode=\"single\"\r\n        keyExpr=\"path\">\r\n    </dx-tree-view>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/user-panel/user-panel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/user-panel/user-panel.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-panel\">\r\n    <div class=\"user-info\">\r\n        <div class=\"image-container\">\r\n            <div class=\"user-image\"></div>\r\n        </div>\r\n        <div class=\"user-name\">{{ gameService.getCurrentPlayer().civilizationName }}</div>\r\n    </div>\r\n    <dx-context-menu\r\n        *ngIf=\"menuMode === 'context'\"\r\n        [items]=\"menuItems\"\r\n        target=\".user-button\"\r\n        showEvent=\"dxclick\"\r\n        width=\"170px\"\r\n        [position]=\"{ my: 'top center', at: 'bottom center' }\"\r\n        cssClass=\"user-menu\">\r\n    </dx-context-menu>\r\n    <dx-list\r\n        *ngIf=\"menuMode === 'list'\"\r\n        class=\"dx-toolbar-menu-action\"\r\n        [items]=\"menuItems\">\r\n    </dx-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-navigation.ts":
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = [
    {
        text: 'Home',
        path: '/home',
        icon: 'home'
    },
    {
        text: 'Acties',
        path: '/actions',
        icon: 'favorites'
    },
    {
        text: 'Overview',
        path: '/overview',
        icon: 'globe'
    },
    {
        text: 'Gamescreen',
        path: '/gamescreen',
        icon: 'globe'
    },
    {
        text: 'Admin',
        path: '/admin',
        icon: 'toolbox'
    },
    {
        text: 'Advances',
        path: '/advances',
        icon: 'fontsize'
    },
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _layouts_advance_card_advance_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/advance-card/advance-card.component */ "./src/app/layouts/advance-card/advance-card.component.ts");
/* harmony import */ var _pages_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/actions/actions.component */ "./src/app/pages/actions/actions.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _pages_advances_advances_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/advances/advances.component */ "./src/app/pages/advances/advances.component.ts");
/* harmony import */ var _pages_gamescreen_gamescreen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/gamescreen/gamescreen.component */ "./src/app/pages/gamescreen/gamescreen.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/overview/overview.component */ "./src/app/pages/overview/overview.component.ts");















var routes = [
    {
        path: 'overview',
        component: _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__["OverviewComponent"],
    },
    {
        path: 'actions',
        component: _pages_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__["ActionsComponent"],
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
    },
    {
        path: 'gamescreen',
        component: _pages_gamescreen_gamescreen_component__WEBPACK_IMPORTED_MODULE_12__["GamescreenComponent"],
    },
    {
        path: 'admin',
        component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
    },
    {
        path: 'advances',
        component: _pages_advances_advances_component__WEBPACK_IMPORTED_MODULE_11__["AdvancesComponent"],
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
var config = { url: 'http://jantineislief.nl:8889', options: {} };
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxNumberBoxModule"],
                _layouts_advance_card_advance_card_component__WEBPACK_IMPORTED_MODULE_8__["AdvanceCardModule"]
            ],
            providers: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__["ActionsComponent"],
                _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__["OverviewComponent"],
                _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _pages_gamescreen_gamescreen_component__WEBPACK_IMPORTED_MODULE_12__["GamescreenComponent"],
                _pages_advances_advances_component__WEBPACK_IMPORTED_MODULE_11__["AdvancesComponent"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQXdDO0VBQ3hDLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBpbXBvcnQgXCIuLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhc2UtYmcsIDUuMDApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(screen, appInfo, gameService) {
        this.screen = screen;
        this.appInfo = appInfo;
        this.gameService = gameService;
    }
    Object.defineProperty(AppComponent.prototype, "getClass", {
        get: function () {
            var _this = this;
            return Object.keys(this.screen.sizes).filter(function (cl) { return _this.screen.sizes[cl]; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isAutorized = function () {
        return this.gameService.playerIndex > -1;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ScreenService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AppInfoService"] },
        { type: _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class')
    ], AppComponent.prototype, "getClass", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/login-form/login-form.component */ "./src/app/shared/components/login-form/login-form.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_5__["SideNavInnerToolbarModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_5__["SingleCardModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _shared_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormModule"],
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["AppInfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/advance-card/advance-card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/advance-card/advance-card.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZHZhbmNlLWNhcmQvQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXGFwcFxcbGF5b3V0c1xcYWR2YW5jZS1jYXJkXFxhZHZhbmNlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLDBDQUF1QztFQUN2QyxnQkFBZ0IsRUFBQTs7QUFHbEIsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBd0MsRUFBQTs7QUFHMUMsK0NBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWR2YW5jZS1jYXJkL2FkdmFuY2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/advance-card/advance-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/advance-card/advance-card.component.ts ***!
  \****************************************************************/
/*! exports provided: AdvanceCardComponent, AdvanceCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceCardComponent", function() { return AdvanceCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceCardModule", function() { return AdvanceCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _advance_popup_advance_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../advance-popup/advance-popup.component */ "./src/app/layouts/advance-popup/advance-popup.component.ts");





var AdvanceCardComponent = /** @class */ (function () {
    function AdvanceCardComponent() {
    }
    AdvanceCardComponent.prototype.openPopup = function () {
        this.showPopup = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdvanceCardComponent.prototype, "advance", void 0);
    AdvanceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advance-card',
            template: __webpack_require__(/*! raw-loader!./advance-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/advance-card/advance-card.component.html"),
            styles: [__webpack_require__(/*! ./advance-card.component.scss */ "./src/app/layouts/advance-card/advance-card.component.scss")]
        })
    ], AdvanceCardComponent);
    return AdvanceCardComponent;
}());

var AdvanceCardModule = /** @class */ (function () {
    function AdvanceCardModule() {
    }
    AdvanceCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _advance_popup_advance_popup_component__WEBPACK_IMPORTED_MODULE_4__["AdvancePopupModule"]],
            exports: [AdvanceCardComponent],
            declarations: [AdvanceCardComponent]
        })
    ], AdvanceCardModule);
    return AdvanceCardModule;
}());



/***/ }),

/***/ "./src/app/layouts/advance-popup/advance-popup.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layouts/advance-popup/advance-popup.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZHZhbmNlLXBvcHVwL0M6XFxVc2Vyc1xcam9iXFxEb2N1bWVudHNcXE1lZ2FDZXJ2ZXJcXEFuZ3VsYXIvc3JjXFxhcHBcXGxheW91dHNcXGFkdmFuY2UtcG9wdXBcXGFkdmFuY2UtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLDBDQUF1QztFQUN2QyxnQkFBZ0IsRUFBQTs7QUFHbEIsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBd0MsRUFBQTs7QUFHMUMsK0NBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWR2YW5jZS1wb3B1cC9hZHZhbmNlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/advance-popup/advance-popup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/advance-popup/advance-popup.component.ts ***!
  \******************************************************************/
/*! exports provided: AdvancePopupComponent, AdvancePopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancePopupComponent", function() { return AdvancePopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancePopupModule", function() { return AdvancePopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_advances_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/advances.service */ "./src/app/shared/services/advances.service.ts");






var AdvancePopupComponent = /** @class */ (function () {
    function AdvancePopupComponent(advancesService) {
        this.advancesService = advancesService;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(AdvancePopupComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
            this.visibleChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    AdvancePopupComponent.prototype.buyAdvance = function () {
        this.advancesService.buyAdvance(this.advance);
        this.visible = false;
    };
    AdvancePopupComponent.ctorParameters = function () { return [
        { type: _shared_services_advances_service__WEBPACK_IMPORTED_MODULE_5__["AdvancesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdvancePopupComponent.prototype, "advance", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdvancePopupComponent.prototype, "visible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AdvancePopupComponent.prototype, "visibleChange", void 0);
    AdvancePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advance-popup',
            template: __webpack_require__(/*! raw-loader!./advance-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/advance-popup/advance-popup.component.html"),
            styles: [__webpack_require__(/*! ./advance-popup.component.scss */ "./src/app/layouts/advance-popup/advance-popup.component.scss")]
        })
    ], AdvancePopupComponent);
    return AdvancePopupComponent;
}());

var AdvancePopupModule = /** @class */ (function () {
    function AdvancePopupModule() {
    }
    AdvancePopupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"]],
            exports: [AdvancePopupComponent],
            declarations: [AdvancePopupComponent]
        })
    ], AdvancePopupModule);
    return AdvancePopupModule;
}());



/***/ }),

/***/ "./src/app/layouts/index.ts":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule, SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavInnerToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavInnerToolbarModule"]; });

/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-card/single-card.component */ "./src/app/layouts/single-card/single-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_1__["SingleCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_1__["SingleCardModule"]; });





/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.container {\n  height: 100%;\n  flex-direction: column;\n  display: flex; }\n\n.layout-body {\n  flex: 1;\n  min-height: 0; }\n\n.content {\n  flex-grow: 1; }\n\n#navigation-header {\n  background-color: #FF5722;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n#navigation-header ::ng-deep .menu-button .dx-icon {\n    color: #fff; }\n\n:host-context(.screen-x-small) #navigation-header {\n    padding-left: 20px; }\n\n:host-context(.dx-theme-generic) #navigation-header {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL0M6XFxVc2Vyc1xcam9iXFxEb2N1bWVudHNcXE1lZ2FDZXJ2ZXJcXEFuZ3VsYXIvc3JjXFxhcHBcXGxheW91dHNcXHNpZGUtbmF2LWlubmVyLXRvb2xiYXJcXHNpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvc2lkZS1uYXYtaW5uZXItdG9vbGJhci9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLE9BQU87RUFDUCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFFRSx5QkNqQm1CO0VEa0JuQix3RUFBd0UsRUFBQTs7QUFIMUU7SUFNSSxXQ3pCa0IsRUFBQTs7QUQ0QnBCO0lBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL3NpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYXlvdXQtYm9keSB7XHJcbiAgZmxleDogMTtcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4jbmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gIEBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3NcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG5cclxuICA6Om5nLWRlZXAgLm1lbnUtYnV0dG9uIC5keC1pY29uIHtcclxuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpICYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAgIFxyXG4gIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpICYge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtdGV4dC1jb2xvcjogI2ZmZjtcbiRiYXNlLWJnOiAjMzYzNjQwO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjNTE1MTU5O1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return SideNavInnerToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return SideNavInnerToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "./node_modules/devextreme-angular/ui/drawer.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-navigation */ "./src/app/app-navigation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var SideNavInnerToolbarComponent = /** @class */ (function () {
    function SideNavInnerToolbarComponent(screen, router) {
        var _this = this;
        this.screen = screen;
        this.router = router;
        this.menuItems = _app_navigation__WEBPACK_IMPORTED_MODULE_8__["navigation"];
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = function (e) {
            _this.menuOpened = !_this.menuOpened;
            e.event.stopPropagation();
        };
    }
    SideNavInnerToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                _this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(function () { return _this.updateDrawer(); });
        this.updateDrawer();
    };
    SideNavInnerToolbarComponent.prototype.updateDrawer = function () {
        var isXSmall = this.screen.sizes['screen-x-small'];
        var isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    };
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "hideMenuAfterNavigation", {
        get: function () {
            return this.menuMode === 'overlap' || this.temporaryMenuOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "showMenuAfterClick", {
        get: function () {
            return !this.menuOpened;
        },
        enumerable: true,
        configurable: true
    });
    SideNavInnerToolbarComponent.prototype.navigationChanged = function (event) {
        var path = event.itemData.path;
        var pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    };
    SideNavInnerToolbarComponent.prototype.navigationClick = function () {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    };
    SideNavInnerToolbarComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ScreenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SideNavInnerToolbarComponent.prototype, "title", void 0);
    SideNavInnerToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-inner-toolbar',
            template: __webpack_require__(/*! raw-loader!./side-nav-inner-toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-inner-toolbar.component.scss */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss")]
        })
    ], SideNavInnerToolbarComponent);
    return SideNavInnerToolbarComponent;
}());

var SideNavInnerToolbarModule = /** @class */ (function () {
    function SideNavInnerToolbarModule() {
    }
    SideNavInnerToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_components__WEBPACK_IMPORTED_MODULE_2__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [SideNavInnerToolbarComponent],
            declarations: [SideNavInnerToolbarComponent]
        })
    ], SideNavInnerToolbarModule);
    return SideNavInnerToolbarModule;
}());



/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n.dx-card {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px; }\n\n:host-context(.screen-x-small) .dx-card {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaW5nbGUtY2FyZC9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxsYXlvdXRzXFxzaW5nbGUtY2FyZFxcc2luZ2xlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBRWI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2luZ2xlLWNhcmQvc2luZ2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZHgtY2FyZCB7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfSAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return SingleCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return SingleCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__);




var SingleCardComponent = /** @class */ (function () {
    function SingleCardComponent() {
    }
    SingleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-card',
            template: __webpack_require__(/*! raw-loader!./single-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/single-card/single-card.component.html"),
            styles: [__webpack_require__(/*! ./single-card.component.scss */ "./src/app/layouts/single-card/single-card.component.scss")]
        })
    ], SingleCardComponent);
    return SingleCardComponent;
}());

var SingleCardModule = /** @class */ (function () {
    function SingleCardModule() {
    }
    SingleCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"]],
            exports: [SingleCardComponent],
            declarations: [SingleCardComponent]
        })
    ], SingleCardModule);
    return SingleCardModule;
}());



/***/ }),

/***/ "./src/app/pages/actions/actions.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/actions/actions.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-avatar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden; }\n  .form-avatar img {\n    height: 120px;\n    display: block;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aW9ucy9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcYWN0aW9uc1xcYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBO0VBVmxCO0lBYUksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1hdmF0YXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/actions/actions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/actions/actions.component.ts ***!
  \****************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");



var ActionsComponent = /** @class */ (function () {
    function ActionsComponent(gameService) {
        this.gameService = gameService;
    }
    ActionsComponent.prototype.taxRateChanged = function () {
        this.gameService.taxCollectionCalculations(this.gameService.getCurrentPlayer());
    };
    ActionsComponent.prototype.unitsChanged = function () {
        this.gameService.getCurrentPlayer().tokensInStock =
            this.gameService.maxUnits - this.gameService.getCurrentPlayer().tokensOnBoard - this.gameService.getCurrentPlayer().tokensInTreasury;
    };
    ActionsComponent.prototype.stockChanged = function () {
        this.gameService.getCurrentPlayer().tokensOnBoard =
            this.gameService.maxUnits - this.gameService.getCurrentPlayer().tokensInStock - this.gameService.getCurrentPlayer().tokensInTreasury;
    };
    ActionsComponent.prototype.citiesOnBoardChanged = function () {
        this.gameService.getCurrentPlayer().citiesInStock =
            this.gameService.maxCities - this.gameService.getCurrentPlayer().citiesOnBoard;
    };
    ActionsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./actions.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.scss */ "./src/app/pages/actions/actions.component.scss")]
        })
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos-container {\n  margin: 20px 0 40px 0;\n  text-align: center; }\n  .logos-container svg {\n    display: inline-block; }\n  .devextreme-logo {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px; }\n  .angular-logo {\n  width: 220px;\n  height: 62px; }\n  .plus {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px; }\n  :host-context(.screen-x-small) .logos-container svg {\n  width: 100%;\n  display: block; }\n  :host-context(.screen-x-small) .logos-container svg.plus {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTtFQUZwQjtJQUlJLHFCQUFxQixFQUFBO0VBSXpCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBR2Q7RUFFSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBSGxCO0lBS00sU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3MtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2ZXh0cmVtZS1sb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbi5hbmd1bGFyLWxvZ28ge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDYycHg7XHJcbn1cclxuXHJcbi5wbHVzIHtcclxuICBtYXJnaW46IDE1cHggMTBweDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAubG9nb3MtY29udGFpbmVyIHtcclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICYucGx1cyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(gameService) {
        this.gameService = gameService;
    }
    AdminComponent.prototype.startGame = function () {
        this.gameService.startGame();
    };
    AdminComponent.prototype.resetGame = function () {
        this.gameService.resetGame();
    };
    AdminComponent.prototype.nextPhase = function () {
        this.gameService.nextPhase();
    };
    AdminComponent.prototype.sendChanges = function () {
        this.gameService.sendToOtherPlayers();
    };
    AdminComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/advances/advances.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/advances/advances.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmFuY2VzL2FkdmFuY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/advances/advances.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/advances/advances.component.ts ***!
  \******************************************************/
/*! exports provided: AdvancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancesComponent", function() { return AdvancesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _shared_services_advances_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/advances.service */ "./src/app/shared/services/advances.service.ts");




var AdvancesComponent = /** @class */ (function () {
    function AdvancesComponent(gameService, advancesService) {
        this.gameService = gameService;
        this.advancesService = advancesService;
    }
    AdvancesComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
        { type: _shared_services_advances_service__WEBPACK_IMPORTED_MODULE_3__["AdvancesService"] }
    ]; };
    AdvancesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./advances.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/advances/advances.component.html"),
            styles: [__webpack_require__(/*! ./advances.component.scss */ "./src/app/pages/advances/advances.component.scss")]
        })
    ], AdvancesComponent);
    return AdvancesComponent;
}());



/***/ }),

/***/ "./src/app/pages/gamescreen/gamescreen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/gamescreen/gamescreen.component.ts ***!
  \**********************************************************/
/*! exports provided: GamescreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamescreenComponent", function() { return GamescreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GamescreenComponent = /** @class */ (function () {
    function GamescreenComponent(gameService) {
        this.gameService = gameService;
    }
    GamescreenComponent.ctorParameters = function () { return [
        { type: _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    GamescreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! raw-loader!./gamescreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gamescreen/gamescreen.component.html")
        })
    ], GamescreenComponent);
    return GamescreenComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos-container {\n  margin: 20px 0 40px 0;\n  text-align: center; }\n  .logos-container svg {\n    display: inline-block; }\n  .devextreme-logo {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px; }\n  .angular-logo {\n  width: 220px;\n  height: 62px; }\n  .plus {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px; }\n  :host-context(.screen-x-small) .logos-container svg {\n  width: 100%;\n  display: block; }\n  :host-context(.screen-x-small) .logos-container svg.plus {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTtFQUZwQjtJQUlJLHFCQUFxQixFQUFBO0VBSXpCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBR2Q7RUFFSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBSGxCO0lBS00sU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4IDAgNDBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBzdmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmRldmV4dHJlbWUtbG9nbyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcblxyXG4uYW5ndWxhci1sb2dvIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiA2MnB4O1xyXG59XHJcblxyXG4ucGx1cyB7XHJcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgLmxvZ29zLWNvbnRhaW5lciB7XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAmLnBsdXMge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(gameService) {
        this.gameService = gameService;
    }
    HomeComponent.prototype.changeTestValue = function () {
        this.gameService.game.countDown = 10;
        this.gameService.game.phase += this.gameService.game.phase === 13 ? -12 : 1;
        this.gameService.getCurrentPlayer().isReady = !this.gameService.getCurrentPlayer().isReady;
        this.gameService.getCurrentPlayer().isActive = true;
        this.gameService.game.hasStarted = false;
        this.gameService.sendToOtherPlayers();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/overview/overview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/overview/overview.component.ts ***!
  \******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(gameService) {
        this.gameService = gameService;
    }
    OverviewComponent.ctorParameters = function () { return [
        { type: _shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/overview/overview.component.html")
        })
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  color: rgba(0, 0, 0, 0.609);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 20px;\n  padding-bottom: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcam9iXFxEb2N1bWVudHNcXE1lZ2FDZXJ2ZXJcXEFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QsMkJDSm1DO0VES25DLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcbiIsIiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1iZzogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogI0ZGNTcyMjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent, FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(gameService) {
        this.gameService = gameService;
    }
    FooterComponent.prototype.playerIsReady = function () {
        this.gameService.playerIsReady();
    };
    FooterComponent.prototype.playerIsNotReady = function () {
        this.gameService.getCurrentPlayer().isReady = false;
        this.gameService.sendToOtherPlayers();
    };
    FooterComponent.prototype.editPhase = function (difference) {
        this.gameService.game.phase += difference;
    };
    FooterComponent.prototype.test = function () {
        this.gameService.game.hasStarted = false;
        this.gameService.getCurrentPlayer().hasMilitary = true;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());

var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_2__["DxButtonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            declarations: [FooterComponent],
            exports: [FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%; }\n\n* {\n  box-sizing: border-box; }\n\n.content {\n  line-height: 1.5; }\n\n.content h2 {\n    font-size: 30px;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n\n.content-block {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px; }\n\n.screen-x-small .content-block {\n    margin-left: 20px;\n    margin-right: 20px; }\n\n.responsive-paddings {\n  padding: 20px; }\n\n.screen-large .responsive-paddings {\n    padding: 40px; }\n\n.dx-card.wide-card {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0; }\n\n.full-height-scrollable > .dx-scrollable-wrapper >\n.dx-scrollable-container > .dx-scrollable-content {\n  height: 100%; }\n\n.full-height-scrollable > .dx-scrollable-wrapper >\n.dx-scrollable-container > .dx-scrollable-content > .dx-scrollview-content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%; }\n\n:host {\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n:host ::ng-deep .dx-toolbar .dx-toolbar-item.menu-button > .dx-toolbar-item-content .dx-icon {\n    color: #FF5722; }\n\n::ng-deep .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px; }\n\n:host-context(.screen-x-small) ::ng-deep .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n    padding: 0 20px; }\n\n::ng-deep .dx-toolbar .dx-toolbar-item.menu-button {\n  width: 60px;\n  text-align: center;\n  padding: 0; }\n\n::ng-deep .header-title .dx-item-content {\n  padding: 0;\n  margin: 0;\n  margin-left: 42px; }\n\n:host-context(.dx-theme-generic) .dx-toolbar {\n  padding: 10px 0; }\n\n:host-context(.dx-theme-generic) .user-button > .dx-button-content {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcam9iXFxEb2N1bWVudHNcXE1lZ2FDZXJ2ZXJcXEFuZ3VsYXIvc3JjXFxkeC1zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcam9iXFxEb2N1bWVudHNcXE1lZ2FDZXJ2ZXJcXEFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQUlJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFaEI7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsYUFBYSxFQUFBOztBQUViO0lBQ0UsYUFBYSxFQUFBOztBQUlqQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCOztFQUVFLFlBQVksRUFBQTs7QUFGZDs7SUFLSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBOztBQ25EcEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHdFQUF3RSxFQUFBOztBQUgxRTtJQU1JLGNDTGlCLEVBQUE7O0FEU3JCO0VBQ0UsZUFBZSxFQUFBOztBQUVmO0lBQ0UsZUFBZSxFQUFBOztBQUluQjtFQUNFLFdEb0N5QjtFQ25DekIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksZUFBZSxFQUFBOztBQUZuQjtFQU1JLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICBtYXJnaW46IDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAuc2NyZWVuLXgtc21hbGwgJiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLXBhZGRpbmdzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAuc2NyZWVuLWxhcmdlICYge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5keC1jYXJkLndpZGUtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZnVsbC1oZWlnaHQtc2Nyb2xsYWJsZSA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXIgPlxyXG4uZHgtc2Nyb2xsYWJsZS1jb250YWluZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYgPiAuZHgtc2Nyb2xsdmlldy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbiRzaWRlLXBhbmVsLW1pbi13aWR0aDogNjBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vZHgtc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuXHJcbiAgOjpuZy1kZWVwIC5keC10b29sYmFyIC5keC10b29sYmFyLWl0ZW0ubWVudS1idXR0b24+LmR4LXRvb2xiYXItaXRlbS1jb250ZW50IC5keC1pY29uIHtcclxuICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXRvb2xiYXIuaGVhZGVyLXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbXMtY29udGFpbmVyIC5keC10b29sYmFyLWFmdGVyIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtLm1lbnUtYnV0dG9uIHtcclxuICB3aWR0aDogJHNpZGUtcGFuZWwtbWluLXdpZHRoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmhlYWRlci10aXRsZSAuZHgtaXRlbS1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tbGVmdDogNDJweDtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguZHgtdGhlbWUtZ2VuZXJpYykge1xyXG4gIC5keC10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcblxyXG4gIC51c2VyLWJ1dHRvbj4uZHgtYnV0dG9uLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxufVxyXG4iLCIkYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4kYmFzZS1hY2NlbnQ6ICNGRjU3MjI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/shared/services/game.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuToggleEnabled = false;
        this.userMenuItems = [{
                text: 'Profile',
                icon: 'user'
            }, {
                text: 'Logout',
                icon: 'runner',
            }];
        this.toggleMenu = function () {
            _this.menuToggle.emit();
        };
    }
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "menuToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "menuToggleEnabled", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"],
                _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserPanelModule"],
                devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_5__["DxToolbarModule"]
            ],
            declarations: [HeaderComponent],
            exports: [HeaderComponent]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, FooterModule, HeaderComponent, HeaderModule, SideNavigationMenuComponent, SideNavigationMenuModule, UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterModule"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideNavigationMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideNavigationMenuModule"]; });

/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserPanelModule"]; });







/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-header {\n  text-align: center;\n  margin-bottom: 40px; }\n  .login-header .title {\n    color: #FF5722;\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tZm9ybS9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvZ2luLWZvcm1cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luLWZvcm0vQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBRnJCO0lBS0ksY0NIaUI7SURJakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XHJcblxyXG4ubG9naW4taGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent, LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "./node_modules/devextreme-angular/ui/check-box.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/text-box */ "./node_modules/devextreme-angular/ui/text-box.js");
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/validator */ "./node_modules/devextreme-angular/ui/validator.js");
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/validation-group */ "./node_modules/devextreme-angular/ui/validation-group.js");
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_10__);











var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(gameService) {
        this.gameService = gameService;
        this.playerName = '';
        this.showCivilizationButtons = false;
    }
    LoginFormComponent.prototype.showCivilizations = function () {
        if (this.playerName !== '') {
            this.showCivilizationButtons = true;
        }
    };
    LoginFormComponent.prototype.chooseCivilization = function (index) {
        // Als deze naam al bij een ander volk staat moet hij daar eerst weg
        for (var i = 0; i < this.gameService.game.players.length; i++) {
            if (i !== index) {
                if (this.gameService.game.players[i].playerName === this.playerName) {
                    this.gameService.game.players[i].isActive = false;
                    this.gameService.game.players[i].playerName = '';
                }
            }
        }
        this.gameService.playerIndex = index;
        this.gameService.getCurrentPlayer().isActive = index !== 0 ? true : false;
        this.gameService.getCurrentPlayer().playerName = this.playerName;
        this.gameService.sendToOtherPlayers();
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/shared/components/login-form/login-form.component.scss")]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
                devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_7__["DxCheckBoxModule"],
                devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
                devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_9__["DxValidatorModule"],
                devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_10__["DxValidationGroupModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent]
        })
    ], LoginFormModule);
    return LoginFormModule;
}());



/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%; }\n\n* {\n  box-sizing: border-box; }\n\n.content {\n  line-height: 1.5; }\n\n.content h2 {\n    font-size: 30px;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n\n.content-block {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px; }\n\n.screen-x-small .content-block {\n    margin-left: 20px;\n    margin-right: 20px; }\n\n.responsive-paddings {\n  padding: 20px; }\n\n.screen-large .responsive-paddings {\n    padding: 40px; }\n\n.dx-card.wide-card {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0; }\n\n.full-height-scrollable > .dx-scrollable-wrapper >\n.dx-scrollable-container > .dx-scrollable-content {\n  height: 100%; }\n\n.full-height-scrollable > .dx-scrollable-wrapper >\n.dx-scrollable-container > .dx-scrollable-content > .dx-scrollview-content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important; }\n\n:host .menu-container {\n    min-height: 100%;\n    display: flex;\n    flex: 1; }\n\n:host .menu-container ::ng-deep .dx-treeview {\n      white-space: nowrap; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-item {\n        padding-left: 0;\n        padding-right: 0; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-item .dx-icon {\n          width: 60px !important;\n          margin: 0 !important; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node {\n        padding: 0 0 !important; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-toggle-item-visibility {\n        right: 10px;\n        left: auto; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n        left: 10px;\n        right: auto; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node[aria-level='1'] {\n        font-weight: bold;\n        border-bottom: 1px solid #515159; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node[aria-level='2'] .dx-treeview-item-content {\n        font-weight: normal;\n        padding: 0 60px; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n      background: transparent; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n      color: #FF5722; }\n\n:host .menu-container ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n      background-color: #3f3f4b; }\n\n:host .menu-container :host-context(.dx-theme-generic) ::ng-deep.dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n      color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uLW1lbnUvQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXGR4LXN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tbWVudS9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGUtbmF2aWdhdGlvbi1tZW51XFxzaWRlLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uLW1lbnUvQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFJSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRWhCO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGFBQWEsRUFBQTs7QUFFYjtJQUNFLGFBQWEsRUFBQTs7QUFJakI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjs7RUFFRSxZQUFZLEVBQUE7O0FBRmQ7O0lBS0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0IsRUFBQTs7QUNuRHBCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUx6QjtJQVFJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsT0FBTyxFQUFBOztBQVZYO01BY00sbUJBQW1CLEVBQUE7O0FBZHpCO1FBbUJRLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTs7QUFwQnhCO1VBdUJVLHNCQUF1QztVQUN2QyxvQkFBb0IsRUFBQTs7QUF4QjlCO1FBK0JRLHVCQUF1QixFQUFBOztBQS9CL0I7UUFtQ1EsV0FBVztRQUNYLFVBQVUsRUFBQTs7QUFwQ2xCO1FBd0NRLFVBQVU7UUFDVixXQUFXLEVBQUE7O0FBekNuQjtRQWdEVSxpQkFBaUI7UUFDakIsZ0NDbERpQixFQUFBOztBREMzQjtRQXFEVSxtQkFBbUI7UUFDbkIsZURDaUIsRUFBQTs7QUN2RDNCO01BaUVZLHVCQUF1QixFQUFBOztBQWpFbkM7TUFxRVksY0NwRVMsRUFBQTs7QUREckI7TUF5RVkseUJBQXlDLEVBQUE7O0FBekVyRDtNQWlGUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tbWVudS9zaWRlLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5zY3JlZW4teC1zbWFsbCAmIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIC5zY3JlZW4tbGFyZ2UgJiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmR4LWNhcmQud2lkZS1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5mdWxsLWhlaWdodC1zY3JvbGxhYmxlID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+XHJcbi5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJiA+IC5keC1zY3JvbGx2aWV3LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuJHNpZGUtcGFuZWwtbWluLXdpZHRoOiA2MHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vZHgtc3R5bGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmFkZGl0aW9uYWwuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuXHJcbiAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IHtcclxuICAgICAgLy8gIyMgTG9uZyB0ZXh0IHBvc2l0aW9uaW5nXHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIC8vICMjXHJcblxyXG4gICAgICAvLyAjIyBJY29uIHdpZHRoIGN1c3RvbWl6YXRpb25cclxuICAgICAgLmR4LXRyZWV2aWV3LWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAuZHgtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogJHNpZGUtcGFuZWwtbWluLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gIyNcclxuICAgICAgXHJcbiAgICAgIC8vICMjIEFycm93IGN1c3RvbWl6YXRpb25cclxuICAgICAgLmR4LXRyZWV2aWV3LW5vZGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmR4LXJ0bCAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICAvLyAjI1xyXG5cclxuICAgICAgLy8gIyMgSXRlbSBsZXZlbHMgY3VzdG9taXphdGlvblxyXG4gICAgICAuZHgtdHJlZXZpZXctbm9kZSB7XHJcbiAgICAgICAgJlthcmlhLWxldmVsPScxJ10ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJhc2UtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmW2FyaWEtbGV2ZWw9JzInXSAuZHgtdHJlZXZpZXctaXRlbS1jb250ZW50IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwICRzaWRlLXBhbmVsLW1pbi13aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gIyNcclxuICAgIH1cclxuXHJcbiAgICAvLyAjIyBTZWxlY3RlZCAmIEZvY3VjZWQgaXRlbXMgY3VzdG9taXphdGlvblxyXG4gICAgOjpuZy1kZWVwIC5keC10cmVldmlldyB7XHJcbiAgICAgIC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmR4LXRyZWV2aWV3LW5vZGUge1xyXG4gICAgICAgICAgJi5keC1zdGF0ZS1zZWxlY3RlZDpub3QoLmR4LXN0YXRlLWZvY3VzZWQpPiAuZHgtdHJlZXZpZXctaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZHgtc3RhdGUtc2VsZWN0ZWQgPiAuZHgtdHJlZXZpZXctaXRlbSAqIHtcclxuICAgICAgICAgICAgY29sb3I6ICRiYXNlLWFjY2VudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm5vdCguZHgtc3RhdGUtZm9jdXNlZCk+LmR4LXRyZWV2aWV3LWl0ZW0uZHgtc3RhdGUtaG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRiYXNlLWJnLCA0LjAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSA6Om5nLWRlZXAuZHgtdHJlZXZpZXcge1xyXG4gICAgICAuZHgtdHJlZXZpZXctbm9kZS1jb250YWluZXIgLmR4LXRyZWV2aWV3LW5vZGUuZHgtc3RhdGUtc2VsZWN0ZWQuZHgtc3RhdGUtZm9jdXNlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAjI1xyXG4gIH1cclxufVxyXG4iLCIkYmFzZS10ZXh0LWNvbG9yOiAjZmZmO1xuJGJhc2UtYmc6ICMzNjM2NDA7XG4kYmFzZS1ib3JkZXItY29sb3I6ICM1MTUxNTk7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4kYmFzZS1hY2NlbnQ6ICNGRjU3MjI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavigationMenuComponent, SideNavigationMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return SideNavigationMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return SideNavigationMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ "./node_modules/devextreme-angular/ui/tree-view.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/events */ "./node_modules/devextreme/events.js");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_events__WEBPACK_IMPORTED_MODULE_3__);




var SideNavigationMenuComponent = /** @class */ (function () {
    function SideNavigationMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._compactMode = false;
    }
    Object.defineProperty(SideNavigationMenuComponent.prototype, "selectedItem", {
        set: function (value) {
            if (this.menu.instance) {
                this.menu.instance.selectItem(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavigationMenuComponent.prototype, "compactMode", {
        get: function () {
            return this._compactMode;
        },
        set: function (val) {
            this._compactMode = val;
            if (val && this.menu.instance) {
                this.menu.instance.collapseAll();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideNavigationMenuComponent.prototype.updateSelection = function (event) {
        var nodeClass = 'dx-treeview-node';
        var selectedClass = 'dx-state-selected';
        var leafNodeClass = 'dx-treeview-node-is-leaf';
        var element = event.element;
        var rootNodes = element.querySelectorAll("." + nodeClass + ":not(." + leafNodeClass + ")");
        Array.from(rootNodes).forEach(function (node) {
            node.classList.remove(selectedClass);
        });
        var selectedNode = element.querySelector("." + nodeClass + "." + selectedClass);
        while (selectedNode && selectedNode.parentElement) {
            if (selectedNode.classList.contains(nodeClass)) {
                selectedNode.classList.add(selectedClass);
            }
            selectedNode = selectedNode.parentElement;
        }
    };
    SideNavigationMenuComponent.prototype.onItemClick = function (event) {
        this.selectedItemChanged.emit(event);
    };
    SideNavigationMenuComponent.prototype.onMenuInitialized = function (event) {
        event.component.option('deferRendering', false);
    };
    SideNavigationMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["on"](this.elementRef.nativeElement, 'dxclick', function (e) {
            _this.openMenu.next(e);
        });
    };
    SideNavigationMenuComponent.prototype.ngOnDestroy = function () {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["off"](this.elementRef.nativeElement, 'dxclick');
    };
    SideNavigationMenuComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"], { static: true })
    ], SideNavigationMenuComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SideNavigationMenuComponent.prototype, "selectedItemChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SideNavigationMenuComponent.prototype, "openMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SideNavigationMenuComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SideNavigationMenuComponent.prototype, "selectedItem", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SideNavigationMenuComponent.prototype, "compactMode", null);
    SideNavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation-menu',
            template: __webpack_require__(/*! raw-loader!./side-navigation-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-menu.component.scss */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss")]
        })
    ], SideNavigationMenuComponent);
    return SideNavigationMenuComponent;
}());

var SideNavigationMenuModule = /** @class */ (function () {
    function SideNavigationMenuModule() {
    }
    SideNavigationMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewModule"]],
            declarations: [SideNavigationMenuComponent],
            exports: [SideNavigationMenuComponent]
        })
    ], SideNavigationMenuModule);
    return SideNavigationMenuModule;
}());



/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info {\n  display: flex;\n  align-items: center; }\n  :host-context(.dx-toolbar-menu-section) .user-info {\n    padding: 10px 6px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .user-info .image-container {\n    overflow: hidden;\n    border-radius: 50%;\n    height: 30px;\n    width: 30px;\n    margin: 0 4px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); }\n  .user-info .image-container .user-image {\n      width: 100%;\n      height: 100%;\n      background: url(\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png\") no-repeat #fff;\n      background-size: cover; }\n  .user-info .user-name {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.87);\n    margin: 0 9px; }\n  .user-panel ::ng-deep .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 16px; }\n  .user-panel ::ng-deep .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px; }\n  ::ng-deep .dx-context-menu.user-menu.dx-rtl .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px; }\n  ::ng-deep .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px; }\n  ::ng-deep .dx-context-menu.user-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px; }\n  ::ng-deep .dx-theme-generic .user-menu .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1wYW5lbC9DOlxcVXNlcnNcXGpvYlxcRG9jdW1lbnRzXFxNZWdhQ2VydmVyXFxBbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHVzZXItcGFuZWxcXHVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItcGFuZWwvQzpcXFVzZXJzXFxqb2JcXERvY3VtZW50c1xcTWVnYUNlcnZlclxcQW5ndWxhci9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBRW5CO0lBQ0UsaUJBQWlCO0lBQ2pCLDJDQUEyQyxFQUFBO0VBTi9DO0lBVUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMseUNBQXNDLEVBQUE7RUFoQjFDO01BbUJNLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0hBQWdIO01BQ2hILHNCQUFzQixFQUFBO0VBdEI1QjtJQTJCSSxlQUFlO0lBQ2YsMEJDOUJpQztJRCtCakMsYUFBYSxFQUFBO0VBSWpCO0VBRUksc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTtFQUp0QjtFQU9JLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtFQUlyQjtFQUdNLGlCQUFpQixFQUFBO0VBSHZCO0VBT0ksa0JBQWtCLEVBQUE7RUFQdEI7RUFVTSxxQkFBcUIsRUFBQTtFQUkzQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcclxuXHJcbi51c2VyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgOmhvc3QtY29udGV4dCguZHgtdG9vbGJhci1tZW51LXNlY3Rpb24pICYge1xyXG4gICAgcGFkZGluZzogMTBweCA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNSk7XHJcblxyXG4gICAgLnVzZXItaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2pzLmRldmV4cHJlc3MuY29tL0RlbW9zL1dpZGdldHNHYWxsZXJ5L0pTRGVtb3MvaW1hZ2VzL2VtcGxveWVlcy8wNi5wbmdcIikgbm8tcmVwZWF0ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xyXG4gICAgbWFyZ2luOiAwIDlweDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIDo6bmctZGVlcCB7XHJcbiAgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5keC1ydGwgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtY29udGV4dC1tZW51LnVzZXItbWVudSB7XHJcbiAgJi5keC1ydGwge1xyXG4gICAgLmR4LXN1Ym1lbnUgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIC5keC1pY29uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5keC1zdWJtZW51IC5keC1tZW51LWl0ZW1zLWNvbnRhaW5lciAuZHgtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5keC1tZW51LWl0ZW0gLmR4LW1lbnUtaXRlbS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogM3B4IDE1cHggNHB4O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC10aGVtZS1nZW5lcmljIC51c2VyLW1lbnUgLmR4LW1lbnUtaXRlbS1jb250ZW50IC5keC1tZW51LWl0ZW0tdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcbiIsIiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1iZzogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogI0ZGNTcyMjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/list */ "./node_modules/devextreme-angular/ui/list.js");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ "./node_modules/devextreme-angular/ui/context-menu.js");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_5__);






var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent(gameService) {
        this.gameService = gameService;
    }
    UserPanelComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], UserPanelComponent.prototype, "menuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], UserPanelComponent.prototype, "menuMode", void 0);
    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! raw-loader!./user-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/shared/components/user-panel/user-panel.component.scss")]
        })
    ], UserPanelComponent);
    return UserPanelComponent;
}());

var UserPanelModule = /** @class */ (function () {
    function UserPanelModule() {
    }
    UserPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_4__["DxListModule"],
                devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_5__["DxContextMenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [UserPanelComponent],
            exports: [UserPanelComponent]
        })
    ], UserPanelModule);
    return UserPanelModule;
}());



/***/ }),

/***/ "./src/app/shared/model/advance-types.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/model/advance-types.enum.ts ***!
  \****************************************************/
/*! exports provided: AdvanceTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTypes", function() { return AdvanceTypes; });
var AdvanceTypes;
(function (AdvanceTypes) {
    AdvanceTypes[AdvanceTypes["NONE"] = 0] = "NONE";
    AdvanceTypes[AdvanceTypes["CIVICS"] = 1] = "CIVICS";
    AdvanceTypes[AdvanceTypes["CRAFTS"] = 2] = "CRAFTS";
    AdvanceTypes[AdvanceTypes["RELIGION"] = 3] = "RELIGION";
    AdvanceTypes[AdvanceTypes["SCIENCE"] = 4] = "SCIENCE";
    AdvanceTypes[AdvanceTypes["ARTS"] = 5] = "ARTS";
})(AdvanceTypes || (AdvanceTypes = {}));


/***/ }),

/***/ "./src/app/shared/model/advances-list.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/advances-list.ts ***!
  \***********************************************/
/*! exports provided: advancesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancesList", function() { return advancesList; });
/* harmony import */ var _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-types.enum */ "./src/app/shared/model/advance-types.enum.ts");

var advancesList = [
    {
        id: 1,
        name: 'ADVANCED MILITARY',
        description: 'In conflicts, you may choose to remove tokens from areas adjacent by land. After each round of token removal a new check for token majority must be made. You may decide to wait for other token conflicts to be resolved first.  You are allowed to cause conflict in areas containing units belonging to players holding CULTURAL ASCENDANCY.  Disadvantage with CIVIL DISORDER: Reduce 1 additional city.',
        cost: 240,
        currentPrice: 240,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 20,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 27,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 2,
        name: 'AGRICULTURE',
        description: 'The population limit of \'0\', \'1\' and \'2\' areas on the board is increased by 1 for you as long as these areas do not contain any other player\'s units or barbarian tokens.  Disadvantage with FAMINE: If you are the primary victim, take 5 aditional damage.',
        cost: 120,
        currentPrice: 120,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 38,
        discountFromCardAmount: 10,
        discountToCard: 12,
        discountToCardAmount: 20,
    }, {
        id: 3,
        name: 'ANATOMY',
        description: 'Upon purchase, you may choose to acquire a science card with an undiscounted cost price of less than 100 for free. Advantage with EPIDEMIC: If you are a secondary victim, prevent 5 damage.',
        cost: 270,
        currentPrice: 270,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 5,
        discountToReligion: 0,
        discountToScience: 20,
        discountToArts: 0,
        discountFromCard: 25,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 4,
        name: 'ARCHITECTURE',
        description: 'Once per turn, when constructing a city, you may choose to pay up to half of the required number of tokens from treasury.',
        cost: 140,
        currentPrice: 140,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 10,
        discountFromCard: 43,
        discountFromCardAmount: 10,
        discountToCard: 28,
        discountToCardAmount: 20,
    }, {
        id: 5,
        name: 'ASTRONAVIGATION',
        description: 'Your ships are allowed to move through open sea areas.',
        cost: 80,
        currentPrice: 80,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 10,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 6,
        discountToCardAmount: 10,
    }, {
        id: 6,
        name: 'CALENDAR',
        description: 'Advantage with FAMINE: Prevent 5 damage.  Advantage with CYCLONE: Reduce 2 less selected cities.',
        cost: 180,
        currentPrice: 180,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 10,
        discountToArts: 0,
        discountFromCard: 5,
        discountFromCardAmount: 10,
        discountToCard: 40,
        discountToCardAmount: 20,
    }, {
        id: 7,
        name: 'CARTOGRAPHY',
        description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards form stack 2 for 5 treasury and/or form stack 7 for 13 treasury tokens per card.  Disadvantage with PIRACY: If you are the primary victim, the beneficiary selects and replaces 1 additional coastal city.',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 10,
        discountToArts: 5,
        discountFromCard: 51,
        discountFromCardAmount: 10,
        discountToCard: 21,
        discountToCardAmount: 20,
    }, {
        id: 8,
        name: 'CLOTH MAKING',
        description: 'Your ships are allowed to move 5 steps.',
        cost: 50,
        currentPrice: 50,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 35,
        discountToCardAmount: 10,
    }, {
        id: 9,
        name: 'COINAGE',
        description: 'You may choose to increase or decrease your tax rate by 1.  Disadvantage with CORRUPTION: Discard 5 additional points of face value.',
        cost: 90,
        currentPrice: 90,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 10,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 47,
        discountToCardAmount: 10,
    }, {
        id: 10,
        name: 'CULTURAL ASCENDANCY',
        description: 'Players are not allowed to cause conflict in areas containing your units, except for areas where a conflict situation already occurs. This does not count for players holding CULTURAL ASCENDANCY or ADVANCED MILITARY.  Your units are protected against the effect of POLITICS.  Your default city support rate is increased by 1.',
        cost: 280,
        currentPrice: 280,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 20,
        discountFromCard: 20,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 11,
        name: 'DEISM',
        description: 'Advantage with SUPERSTITION: Reduce 1 less city.',
        cost: 70,
        currentPrice: 70,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 5,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 19,
        discountToCardAmount: 10,
    }, {
        id: 12,
        name: 'DEMOCRACY',
        description: 'During the Tax Collection phase you collect tax as usual but your sities do not revolt as a result of a shortage in tax collection.  Advantage with CIVIL WAR: Select 10 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
        cost: 220,
        currentPrice: 220,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 20,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 2,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 13,
        name: 'DIASPORA',
        description: 'SPECIAL ABILITY: You may choose to take up to 5 of your tokens from the board and place them anywhere else on the board, providing that no population limits are exceeded.',
        cost: 270,
        currentPrice: 270,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 20,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 35,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 14,
        name: 'DIPLOMACY',
        description: 'Players are not allowed to move tokens into areas containing your cities, except for areas where a conflict situation already occurs. This does not count for players holding DIPLOMACY or MILITARY.  Disadvantage with TREACHERY: The beneficiary selects and annexes 1 additional city.',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 10,
        discountFromCard: 49,
        discountFromCardAmount: 10,
        discountToCard: 39,
        discountToCardAmount: 20,
    }, {
        id: 15,
        name: 'DRAMA AND POETRY',
        description: 'Advantage with CIVIL WAR: Select 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
        cost: 80,
        currentPrice: 80,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 10,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 41,
        discountToCardAmount: 10,
    }, {
        id: 16,
        name: 'EMPIRICISM',
        description: '0',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 5,
        discountToReligion: 5,
        discountToScience: 10,
        discountToArts: 5,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 25,
        discountToCardAmount: 10,
    }, {
        id: 17,
        name: 'ENGINEERING',
        description: 'Other players or barbarians require 8 tokens to succesfully attack your cities. Your cities are then replaced by 7 tokens. This does not apply when the attacking player also holds ENGINEERING.  You require 6 tokens to succesfully attack other player\'s cities of pirate cities. Their cities are then replaced by 5 tokens. This does not apply when the defending player also holds ENGINEERING.  Advantage with EARTHQUAKE: Your city is reduced instead of destroyed.  Advantage with FLOOD: Prevent 5 damage.',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 10,
        discountToArts: 0,
        discountFromCard: 23,
        discountFromCardAmount: 10,
        discountToCard: 42,
        discountToCardAmount: 20,
    }, {
        id: 18,
        name: 'ENLIGHTENMENT',
        description: 'Advantage with SUPERSTITION: Reduce 1 less city.  Advantage with SLAVE REVOLT: Your city support rate is decreased by 1 during the resolution of SLAVE REVOLT.  Advantage with EPIDEMIC: If you are the primary victim, prevent 5 damage.  Advantage with REGRESSION: For each step backward, you may choose to prevent the effect by destroying 2 of your cities (if possible non0coastal).',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 5,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 32,
        discountFromCardAmount: 10,
        discountToCard: 36,
        discountToCardAmount: 20,
    }, {
        id: 19,
        name: 'FUNDAMENTALISM',
        description: 'SPECIAL ABILITY: You may choose to destroy all units in an area adjacent to your units by land. Barbarian tokens, pirate cities and units belonging to players holding FUNDAMENTALISM or PHILOSOPHY are unaffected.  Disadvantage with REGRESSION: Your marker is moved backward 1 additional step.',
        cost: 150,
        currentPrice: 150,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 11,
        discountFromCardAmount: 10,
        discountToCard: 30,
        discountToCardAmount: 20,
    }, {
        id: 20,
        name: 'LAW',
        description: 'Advantage with TYRANNY: The beneficiary selects and annexes 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.  Advantage with CORRUPTION: Discard 5 less points of face value.',
        cost: 150,
        currentPrice: 150,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 10,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 29,
        discountFromCardAmount: 10,
        discountToCard: 10,
        discountToCardAmount: 20,
    }, {
        id: 21,
        name: 'LIBRARY',
        description: 'You may discount the cost of 1 others Civilization Advance that you purchase in the same turn as LIBRARY by 40 points.  Advantage with REGRESSION: Your marker is moved backward 1 step less.',
        cost: 220,
        currentPrice: 220,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 20,
        discountToArts: 5,
        discountFromCard: 7,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 22,
        name: 'LITERACY',
        description: '0',
        cost: 110,
        currentPrice: 110,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        discountToCivics: 10,
        discountToCrafts: 5,
        discountToReligion: 5,
        discountToScience: 5,
        discountToArts: 10,
        discountFromCard: 34,
        discountFromCardAmount: 10,
        discountToCard: 24,
        discountToCardAmount: 20,
    }, {
        id: 23,
        name: 'MASONRY',
        description: 'Advantage with CYCLONE: Reduce 1 less of your selected cities.',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 17,
        discountToCardAmount: 10,
    }, {
        id: 24,
        name: 'MATHEMATICS',
        description: '0',
        cost: 250,
        currentPrice: 250,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        discountToCivics: 10,
        discountToCrafts: 10,
        discountToReligion: 10,
        discountToScience: 20,
        discountToArts: 20,
        discountFromCard: 22,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 25,
        name: 'MEDICINE',
        description: 'Advantage with EPIDEMIC: Prevent 5 damage.',
        cost: 140,
        currentPrice: 140,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 5,
        discountToReligion: 0,
        discountToScience: 10,
        discountToArts: 0,
        discountFromCard: 16,
        discountFromCardAmount: 10,
        discountToCard: 3,
        discountToCardAmount: 20,
    }, {
        id: 26,
        name: 'METALWORKING',
        description: 'In conflicts, for each round of token removal all other players not holding METALWORKING must remove their token first.',
        cost: 90,
        currentPrice: 90,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 27,
        discountToCardAmount: 10,
    }, {
        id: 27,
        name: 'MILITARY',
        description: 'Your movement phase is after all other players not holding MILITARY have moved.  You are allowed tot move tokens into areas containing cities belonging to players holding DIPLOMACY.  Disadvantage with CIVIL WAR: select 5 additional unit points.',
        cost: 170,
        currentPrice: 170,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 10,
        discountToCrafts: 5,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 26,
        discountFromCardAmount: 10,
        discountToCard: 1,
        discountToCardAmount: 20,
    }, {
        id: 28,
        name: 'MINING',
        description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards form stack 6 and/or form stack 8 for 13 treasury tokens per card.  Treasury tokens are worth 2 points when purchasing Civilization Advances. When using treasury tokens to purchase Civilization Advances you may exceed the purchase price by exactly 1 this way.  Disadvantage with SLAVE REVOLT: Your city support rate is increased by 1 during the resolution of SLAVE REVOLT.',
        cost: 230,
        currentPrice: 230,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 20,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 4,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 29,
        name: 'MONARCHY',
        description: 'You may choose to increase your tax rate by 1.  Advantage with BARBARIAN HORDES: 5 less barbarian tokens are used.  Disadvantage with TYRANNY: The beneficiary selects and annexes 5 additional unit points.',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 10,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 20,
        discountToCardAmount: 10,
    }, {
        id: 30,
        name: 'MONOTHEISM',
        description: 'SPECIAL ABILITY: You may choose to annex all units in an area adjacent to your units by land. Barbarian tokens, pirate cities and units belonging to players holding MONOTHEISM or THEOLOGY are unaffected.  Disadavantage with ICONOCLASM AND HERESY: Reduce 1 additional city.',
        cost: 240,
        currentPrice: 240,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 20,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 19,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 31,
        name: 'MONUMENT',
        description: 'Acquire 20 additional points of credit tokens in any combination of colors.',
        cost: 180,
        currentPrice: 180,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 33,
        discountFromCardAmount: 10,
        discountToCard: 50,
        discountToCardAmount: 20,
    }, {
        id: 32,
        name: 'MUSIC',
        description: 'Advantage with CIVIL WAR: Select 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
        cost: 80,
        currentPrice: 80,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 10,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 18,
        discountToCardAmount: 10,
    }, {
        id: 33,
        name: 'MYSTICISM',
        description: 'Advantage with SUPERSTITION: Reduce 1 less city.',
        cost: 50,
        currentPrice: 50,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 31,
        discountToCardAmount: 10,
    }, {
        id: 34,
        name: 'MYTHOLOGY',
        description: 'Advantage with SLAVE REVOLT: Your city support rate is decreased by 1 during the resolution of SLAVE REVOLT.',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 22,
        discountToCardAmount: 10,
    }, {
        id: 35,
        name: 'NAVAL WARFARE',
        description: 'Your ships are allowed to carry 6 tokens.  In conflicts, you may choose to remove ships from the conflict area instead of tokens. After each round of token removal a new check for token majority must be made.  Advantage with PIRACY: If you are the primary victim, the beneficiary selects and replaces 1 less coastal city. You may not be selected as a secondary victim.  Disadvantage with CIVIL DISORDER: Reduce 1 additional city.',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 10,
        discountToCrafts: 5,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 8,
        discountFromCardAmount: 10,
        discountToCard: 13,
        discountToCardAmount: 20,
    }, {
        id: 36,
        name: 'PHILOSOPHY',
        description: 'Advanatage with ICONOCLASM AND HERESY: Reduce 2 cities less.  Disadvantage with CIVIL WAR: Select 5 additional unit points.',
        cost: 220,
        currentPrice: 220,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 20,
        discountToScience: 20,
        discountToArts: 0,
        discountFromCard: 18,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 37,
        name: 'POLITICS',
        description: 'SPECIAL ABILITY: You may choose 1 of 2 options: 1) Gain up to 5 treasury tokens from stock. 2) Annex all units in an area adjacent by land to your units. Pay treasury tokens equal to the number of unit points annexed, or the effect is canceled. Barbarian tokens, pirate cities and units belonging to players holding POLITICS or CULTURAL ASCENDANCY are unaffected.  Disadvantage with BARBARIAN HORDES: 5 additional barbarian tokens are used.',
        cost: 230,
        currentPrice: 230,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 20,
        discountFromCard: 41,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 38,
        name: 'POTTERY',
        description: 'Advantage with FAMINE: Prevent 5 damage.',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 5,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 2,
        discountToCardAmount: 10,
    }, {
        id: 39,
        name: 'PROVINCIAL EMPIRE',
        description: 'SPECIAL ABILITY: You may choose to select up to 5 players that have units adjacent by land or water to your units. These players must choose and give you a Trade Card with a face value of at least 2. Players holding PROVINCIAL EMPIRE or PUBLIC WORKS may not be selected.  Disadvantage with BARBARIAN HORDES: 5 additional barbarian tokens are used.  Disadvantage with TRYANNY: The beneficiary selects and annexes 5 additional unit points.',
        cost: 260,
        currentPrice: 260,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 20,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 14,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 40,
        name: 'PUBLIC WORKS',
        description: 'Areas containing your cities may also contain 1 of your tokens.  You are protected against the effect of PROVINCIAL EMPIRE.',
        cost: 230,
        currentPrice: 230,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 20,
        discountToCrafts: 5,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 6,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 41,
        name: 'RHETORIC',
        description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards from stack 3 for 9 treasury tokens per card.',
        cost: 130,
        currentPrice: 130,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 10,
        discountFromCard: 16,
        discountFromCardAmount: 10,
        discountToCard: 37,
        discountToCardAmount: 20,
    }, {
        id: 42,
        name: 'ROADBUILDING',
        description: 'When moving over land, your tokens may move 2 areas. Tokens that are in a conflict situation after 1 step are not allowed to move any further.  Your hand limit of trade cards is increased by 1.  Disadvantage with EPIDEMIC: If you are the primary victim, take 5 additional damage.',
        cost: 220,
        currentPrice: 220,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 20,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 17,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 43,
        name: 'SCULPTURE',
        description: 'Advantage with TYRANNY: The beneficiary selects and annexes 5 less unit points.',
        cost: 50,
        currentPrice: 50,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 10,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 4,
        discountToCardAmount: 10,
    }, {
        id: 44,
        name: 'THEOCRACY',
        description: 'Advantage with ICONOCLASM AND HERESY: You may choose and discard 2 Trade Cards to prevent the city reduction effect for you.',
        cost: 80,
        currentPrice: 80,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 48,
        discountToCardAmount: 10,
    }, {
        id: 45,
        name: 'THEOLOGY',
        description: 'Advantage with ICONOCLASM AND HERESY: Reduce 3 cities less.  Your units are protected against the effect of MONOTHEISM.',
        cost: 250,
        currentPrice: 250,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 20,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 48,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 46,
        name: 'TRADE EMPIRE',
        description: 'Once per turn, you may choose to use 1 substitute Trade Card of at least the same face value when turning in an incomplete set of commodity cards.  Disadvantage with CYCLONE: Select and reduce 1 additional city adjacent to the open sea area.  Disadvantage with EPIDEMIC: If you are the primary victim, take 5 additional damage.',
        cost: 260,
        currentPrice: 260,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 20,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 47,
        discountFromCardAmount: 20,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 47,
        name: 'TRADE ROUTES',
        description: 'SPECIAL ABILITY: You may choose to discard any number of Trade Cards to gain treasury tokens at twice the face value of the Trade Cards discarded this way.',
        cost: 180,
        currentPrice: 180,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 0,
        discountToCrafts: 10,
        discountToReligion: 5,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 9,
        discountFromCardAmount: 10,
        discountToCard: 46,
        discountToCardAmount: 20,
    }, {
        id: 48,
        name: 'UNIVERSAL DOCTRINE',
        description: 'SPECAIL ABILITY: You may choose to annex 1 pirate city of up to 5 barbarian tokens anywhere on the board.  Disadvantage with SUPERSTITION: Reduce 1 additional city.',
        cost: 160,
        currentPrice: 160,
        points: 3,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].RELIGION,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 10,
        discountToScience: 0,
        discountToArts: 0,
        discountFromCard: 44,
        discountFromCardAmount: 10,
        discountToCard: 45,
        discountToCardAmount: 20,
    }, {
        id: 49,
        name: 'URBANISM',
        description: 'Once per turn, when constructing a wilderness city you may choose to use up to 4 tokens from areas adjacent by land.',
        cost: 50,
        currentPrice: 50,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].NONE,
        discountToCivics: 10,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 14,
        discountToCardAmount: 10,
    }, {
        id: 50,
        name: 'WONDER OF THE WORLD',
        description: 'During the Trade Cards Acquisition phase, you may acquire 1 additional Trade Card for free from a stack number that is highter than your number of cities in play.  WONDER OF THE WORLD counts as a city during the A.S.T. alteration phase.  Disadvantage with CORRUPTION: Discard 5 additional points of face value.',
        cost: 290,
        currentPrice: 290,
        points: 6,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CRAFTS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].ARTS,
        discountToCivics: 0,
        discountToCrafts: 20,
        discountToReligion: 0,
        discountToScience: 0,
        discountToArts: 20,
        discountFromCard: 0,
        discountFromCardAmount: 0,
        discountToCard: 0,
        discountToCardAmount: 0,
    }, {
        id: 51,
        name: 'WRITTEN RECORD',
        description: 'Acquire 10 additional points of credit tokens in any combination of colors.',
        cost: 60,
        currentPrice: 60,
        points: 1,
        type1: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].CIVICS,
        type2: _advance_types_enum__WEBPACK_IMPORTED_MODULE_0__["AdvanceTypes"].SCIENCE,
        discountToCivics: 5,
        discountToCrafts: 0,
        discountToReligion: 0,
        discountToScience: 5,
        discountToArts: 0,
        discountFromCard: 31,
        discountFromCardAmount: 20,
        discountToCard: 7,
        discountToCardAmount: 10,
    }
];


/***/ }),

/***/ "./src/app/shared/model/game.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/game.ts ***!
  \**************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/app/shared/model/player.ts");

var Game = /** @class */ (function () {
    function Game() {
        this.turn = 0;
        this.phase = 0;
        this.players = [];
        this.hasStarted = false;
        this.advancesInPlay = [];
        this.countDown = 0;
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Admin', 0, 0));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Minoa', 6, 9));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Saba', 6, 9));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Assyria', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Maurya', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Celt', 5, 9));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Babylon', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Carthage', 5, 9));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Dravidia', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Hatti', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Kushan', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Rome', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Persia', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Iberia', 5, 9));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Nubia', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Hellas', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Indus', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Egypt', 5, 8));
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Parthia', 5, 9));
        // set admin name
        this.players[0].playerName = 'admin';
        // set originalOrder (for sorting)
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].originalOrder = i;
        }
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/shared/model/phases.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/phases.ts ***!
  \****************************************/
/*! exports provided: phases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phases", function() { return phases; });
var phases = [
    'Voorbereiding',
    'Tax Collection',
    'Population Expansion',
    'Movement',
    'Conflict',
    'City Construction',
    'Tradecard Acquisition',
    'Trade',
    'Calamity selection',
    'Calamity Resolution',
    'Special Abilities',
    'Surplus & Population',
    'Advances Acquisistion',
    'A.S.T. Alteration',
];


/***/ }),

/***/ "./src/app/shared/model/player.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/player.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(civilizationName, AstNextAgePoint1, AstNextAgePoint2) {
        this.isActive = false;
        this.isReady = false;
        this.censusOrder = 0;
        this.playerName = '';
        this.citiesOnBoard = 0;
        this.citiesInStock = 9;
        this.tokensInStock = 55;
        this.tokensInTreasury = 0;
        this.treasuryDifference = 0;
        this.tokensOnBoard = 0;
        this.shipsOnBoard = 0;
        this.score = 0;
        this.AstNextAgePoint3 = 11;
        this.AstPosition = 0;
        this.taxRate = 2;
        this.collectedTax = 0;
        this.hasTaxRevolt = false;
        this.hasTimeLeft = 0;
        this.ownedAdvances = [];
        // Advances:
        this.hasMilitary = false;
        this.hasCulturalAscendancy = false;
        this.hasCoinage = false;
        this.hasMonarchy = false;
        this.hasDemocracy = false;
        this.hasAdvancedMilitary = false;
        this.hasEngineering = false;
        this.hasMetalWorking = false;
        this.hasNavalWarfare = false;
        this.personalCountDown = 0;
        this.civilizationName = civilizationName;
        this.AstNextAgePoint1 = AstNextAgePoint1;
        this.AstNextAgePoint2 = AstNextAgePoint2;
    }
    Player.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: Number }
    ]; };
    return Player;
}());



/***/ }),

/***/ "./src/app/shared/services/advances.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/advances.service.ts ***!
  \*****************************************************/
/*! exports provided: AdvancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancesService", function() { return AdvancesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _model_advances_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/advances-list */ "./src/app/shared/model/advances-list.ts");
/* harmony import */ var _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/advance-types.enum */ "./src/app/shared/model/advance-types.enum.ts");





var AdvancesService = /** @class */ (function () {
    function AdvancesService(gameService) {
        this.gameService = gameService;
    }
    Object.defineProperty(AdvancesService.prototype, "availableAdvances", {
        get: function () {
            if (!this._availableAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
                this.fillLists();
            }
            return this._availableAdvances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvancesService.prototype, "ownedAdvances", {
        get: function () {
            if (!this._ownedAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
                this.fillLists();
            }
            return this._ownedAdvances;
        },
        enumerable: true,
        configurable: true
    });
    // player is optional, assumes current player if no player is provided
    AdvancesService.prototype.playerHasAdvance = function (advanceType, player) {
        if (!player) {
            player = this.gameService.getCurrentPlayer();
        }
        return player.ownedAdvances.includes(advanceType);
    };
    AdvancesService.prototype.fillLists = function () {
        var e_1, _a, e_2, _b;
        this._availableAdvances = [];
        this._ownedAdvances = [];
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.gameService.getCurrentPlayer().ownedAdvances), _d = _c.next(); !_d.done; _d = _c.next()) {
                var advanceType = _d.value;
                this._ownedAdvances.push(_model_advances_list__WEBPACK_IMPORTED_MODULE_3__["advancesList"][advanceType - 1]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var advancesList_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_model_advances_list__WEBPACK_IMPORTED_MODULE_3__["advancesList"]), advancesList_1_1 = advancesList_1.next(); !advancesList_1_1.done; advancesList_1_1 = advancesList_1.next()) {
                var advance = advancesList_1_1.value;
                if (!this._ownedAdvances.includes(advance)) {
                    this.calculatePrice(advance);
                    this._availableAdvances.push(advance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (advancesList_1_1 && !advancesList_1_1.done && (_b = advancesList_1.return)) _b.call(advancesList_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    AdvancesService.prototype.calculatePrice = function (advance) {
        var e_3, _a;
        var price = advance.cost;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this._ownedAdvances), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ownedAdvance = _c.value;
                if (advance.type1 === _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"].ARTS) {
                    price -= ownedAdvance.discountToArts;
                }
                else if (advance.type1 === _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"].CIVICS) {
                    price -= ownedAdvance.discountToCivics;
                }
                else if (advance.type1 === _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"].CRAFTS) {
                    price -= ownedAdvance.discountToCrafts;
                }
                else if (advance.type1 === _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"].RELIGION) {
                    price -= ownedAdvance.discountToReligion;
                }
                else if (advance.type1 === _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"].SCIENCE) {
                    price -= ownedAdvance.discountToScience;
                }
                if (advance.discountFromCard === ownedAdvance.id) {
                    price -= advance.discountFromCardAmount;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        advance.currentPrice = price;
    };
    AdvancesService.prototype.buyAdvance = function (advance) {
        this.gameService.getCurrentPlayer().ownedAdvances.push(advance.id);
        this.gameService.sendToOtherPlayers();
    };
    AdvancesService.prototype.getAdvance = function (advanceID) {
        return _model_advances_list__WEBPACK_IMPORTED_MODULE_3__["advancesList"][advanceID - 1];
    };
    AdvancesService.prototype.getAdvanceTypeName = function (type) {
        return _model_advance_types_enum__WEBPACK_IMPORTED_MODULE_4__["AdvanceTypes"][type];
    };
    AdvancesService.ctorParameters = function () { return [
        { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    AdvancesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AdvancesService);
    return AdvancesService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return AppInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppInfoService = /** @class */ (function () {
    function AppInfoService() {
    }
    Object.defineProperty(AppInfoService.prototype, "title", {
        get: function () {
            return 'MegaCerver';
        },
        enumerable: true,
        configurable: true
    });
    AppInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppInfoService);
    return AppInfoService;
}());



/***/ }),

/***/ "./src/app/shared/services/game.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/game */ "./src/app/shared/model/game.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_phases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/phases */ "./src/app/shared/model/phases.ts");






var GameService = /** @class */ (function () {
    function GameService(socket) {
        var _this = this;
        this.socket = socket;
        this.gameObservable = this.socket.fromEvent('game');
        this.game = new _model_game__WEBPACK_IMPORTED_MODULE_3__["Game"]();
        this.currentPhase = 0;
        this.maxUnits = 55;
        this.maxCities = 9;
        this.gameSubscription = this.gameObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.game)).subscribe(function (data) {
            console.log('---------------- recieved data: ', data);
            if (data.hasStarted === undefined) {
                data = new _model_game__WEBPACK_IMPORTED_MODULE_3__["Game"]();
            }
            Object.assign(_this.game, data);
            if (_this.currentPhase !== _this.game.phase) {
                _this.phaseHasChangedActions(_this.game.phase);
            }
            if (_this.game.countDown > 0) {
                _this.startCountDown(_this.game.countDown);
                _this.game.countDown = 0;
            }
            // count players in queue during phase 3
            if (_this.game.phase === 3) {
                var counter_1 = 0;
                _this.getActivePlayers().forEach(function (player) {
                    if (!player.isReady && player.censusOrder < _this.getCurrentPlayer().censusOrder) {
                        counter_1 += 1;
                    }
                });
                // Start the countdown if there were players in front of you but not anymore.
                if (_this.playersInFrontOfCurrentPlayerInQueue > 0 && counter_1 === 0) {
                    _this.startCountDown(_this.getCurrentPlayer().personalCountDown);
                }
                _this.playersInFrontOfCurrentPlayerInQueue = counter_1;
            }
        });
    }
    GameService.prototype.playerIsReady = function (index) {
        var player;
        if (index) {
            player = this.game.players[index];
        }
        else {
            player = this.getCurrentPlayer();
        }
        player.tokensInTreasury += player.treasuryDifference;
        player.treasuryDifference = 0;
        player.isReady = true;
        if (this.everybodyIsReady() && this.game.hasStarted) {
            this.nextPhase();
        }
        else {
            this.sendToOtherPlayers();
        }
    };
    GameService.prototype.everybodyIsReady = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.game.players), _c = _b.next(); !_c.done; _c = _b.next()) {
                var player = _c.value;
                if (player.isActive && !player.isReady) {
                    return false; // Somebody is not yet ready
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    GameService.prototype.nextPhase = function () {
        var e_2, _a;
        var _this = this;
        if (!this.game.hasStarted) {
            return;
        }
        if (this.game.phase >= 13) {
            this.game.phase = 1;
            this.game.turn += 1;
        }
        else {
            this.game.phase += 1;
        }
        try {
            // All players are set to unready
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.game.players), _c = _b.next(); !_c.done; _c = _b.next()) {
                var player = _c.value;
                if (player.isActive) {
                    player.isReady = false;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Calculations on phase change to determine readyness and other values
        if (this.game.phase === 1) {
            this.getActivePlayers().forEach(function (player) {
                _this.taxCollectionCalculations(player);
                // als de speler geen advance heeft om tax rate aan te passen is hij automatisch ready
                if (!(player.hasMonarchy || player.hasCoinage)) {
                    player.isReady = true;
                }
                // Automatisch door als iedereen ready is:
                // if (this.everybodyIsReady()) {
                //     this.nextPhase();
                // }
            });
        }
        else if (this.game.phase === 2) {
        }
        else if (this.game.phase === 3) {
            var playerList = this.getActivePlayers();
            // Sorteer spelers op aantal token (en bij gelijk aantal op originele volgorde)
            playerList.sort(function (a, b) {
                return b.tokensOnBoard - a.tokensOnBoard === 0 ? a.originalOrder - b.originalOrder : b.tokensOnBoard - a.tokensOnBoard;
            });
            // Zet de spelers met Military achteraan de rij
            for (var i = 0; i < playerList.length; i++) {
                playerList[i].censusOrder = playerList[i].hasMilitary ? i + playerList.length : i;
            }
            // Sorteer spelers op censusVolgorde
            playerList.sort(function (a, b) { return a.censusOrder - b.censusOrder; });
            // Geef iedereen een volgnr (logischer leesbaar)
            for (var i = 0; i < playerList.length; i++) {
                playerList[i].censusOrder = i + 1;
                if (i === 0) {
                    playerList[i].personalCountDown = 150;
                }
                else if (i === 1) {
                    playerList[i].personalCountDown = 120;
                }
                else {
                    playerList[i].personalCountDown = 90;
                }
            }
        }
        else if (this.game.phase === 4) {
        }
        else if (this.game.phase === 5) {
        }
        else if (this.game.phase === 6) {
        }
        else if (this.game.phase === 7) {
            this.game.countDown = 900;
        }
        else if (this.game.phase === 8) {
        }
        else if (this.game.phase === 9) {
        }
        else if (this.game.phase === 10) {
        }
        else if (this.game.phase === 11) {
        }
        else if (this.game.phase === 12) {
        }
        else if (this.game.phase === 13) {
        }
        this.sendToOtherPlayers();
    };
    // Things that should happen when game arrives with changed phase
    GameService.prototype.phaseHasChangedActions = function (newPhase) {
        // check to prevent error on first load
        if (!this.getCurrentPlayer()) {
            return;
        }
        this.currentPhase = this.game.phase;
        this.disableReadyButton = false;
        if (this.getCurrentPlayer().isReady) {
            this.disableUnreadyButton = true;
        }
        else {
            this.disableUnreadyButton = false;
        }
        if (this.game.phase === 8 && this.countDownInterval) {
            clearInterval(this.countDownInterval);
        }
    };
    GameService.prototype.taxCollectionCalculations = function (player) {
        player.collectedTax = player.citiesOnBoard * player.taxRate;
        // check for tax revolt
        if (player.tokensInStock < player.collectedTax) {
            if (!player.hasDemocracy) {
                player.hasTaxRevolt = true;
            }
            // collected tax can not be more than tokens in stock
            player.collectedTax = player.tokensInStock;
        }
        else {
            player.hasTaxRevolt = false;
        }
        player.tokensInTreasury += player.collectedTax;
        player.tokensInStock -= player.collectedTax;
    };
    GameService.prototype.startCountDown = function (seconds) {
        var _this = this;
        clearInterval(this.countDownInterval);
        this.countDown = seconds;
        if (this.countDown > 0) {
            var startTime_1 = Date.now();
            this.countDownInterval = setInterval(function () {
                _this.countDown = seconds - Math.floor((Date.now() - startTime_1) / 1000);
                _this.updateCountDownVisibleString();
                if (_this.countDown < 1) {
                    clearInterval(_this.countDownInterval);
                    _this.countDown = 0;
                }
            }, 999);
        }
    };
    GameService.prototype.updateCountDownVisibleString = function () {
        var minutes = Math.floor(this.countDown / 60);
        this.countDown = this.countDown - minutes * 60;
        this.countDownVisibleString = minutes + ":" + (this.countDown < 10 ? 0 : '') + this.countDown;
    };
    GameService.prototype.getCurrentPlayer = function () {
        if (this.game.players[this.playerIndex]) {
            return this.game.players[this.playerIndex];
        }
        return null;
    };
    GameService.prototype.getActivePlayers = function () {
        var output = [];
        this.game.players.forEach(function (player) {
            if (player.isActive) {
                output.push(player);
            }
        });
        return output;
    };
    GameService.prototype.sendToOtherPlayers = function () {
        console.log('++++++++++++++++ send game: ', this.game);
        this.socket.emit('updateGame', this.game);
    };
    GameService.prototype.startGame = function () {
        this.game.hasStarted = true;
        this.game.turn = 1;
        // Start game on phase 2 since nobody has cities yet.
        this.game.phase = 1;
        this.nextPhase();
    };
    GameService.prototype.resetGame = function () {
        console.log('||||||||||||||| reset game.');
        this.socket.emit('resetGame');
    };
    GameService.prototype.getPhaseName = function (index) {
        return _model_phases__WEBPACK_IMPORTED_MODULE_5__["phases"][index ? index : this.game.phase];
    };
    GameService.prototype.getAdvancesInPlay = function () {
        return this.game.advancesInPlay;
    };
    GameService.ctorParameters = function () { return [
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
    ]; };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AppInfoService, ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ "./src/app/shared/services/app-info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return _app_info_service__WEBPACK_IMPORTED_MODULE_0__["AppInfoService"]; });

/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen.service */ "./src/app/shared/services/screen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return _screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]; });





/***/ }),

/***/ "./src/app/shared/services/screen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var ScreenService = /** @class */ (function () {
    function ScreenService(breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large])
            .subscribe(function () { return _this.changed.next(); });
    }
    ScreenService.prototype.isLargeScreen = function () {
        var isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large);
        var isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge);
        return isLarge || isXLarge;
    };
    Object.defineProperty(ScreenService.prototype, "sizes", {
        get: function () {
            return {
                'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall),
                'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small),
                'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium),
                'screen-large': this.isLargeScreen(),
            };
        },
        enumerable: true,
        configurable: true
    });
    ScreenService.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ScreenService.prototype, "changed", void 0);
    ScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScreenService);
    return ScreenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\job\Documents\MegaCerver\Angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map