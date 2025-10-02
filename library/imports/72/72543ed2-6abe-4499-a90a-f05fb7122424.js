"use strict";
cc._RF.push(module, '725437Sar5EmakK8F+3EiQk', 'Localize');
// Game/Scripts/ui/Localize.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var LanguageManager_1 = require("../../../framework/LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Localize = /** @class */ (function (_super) {
    __extends(Localize, _super);
    function Localize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnVi = null;
        _this.btnEn = null;
        _this.btnClose = null;
        return _this;
    }
    Localize.prototype.onLoad = function () {
        if (this.btnClose) {
            this.btnClose.on('click', this.onClickClose, this);
        }
    };
    Localize.prototype.start = function () {
        this.btnVi.node.on("click", function () {
            LanguageManager_1.default.instance.setLanguage("vi");
        });
        this.btnEn.node.on("click", function () {
            LanguageManager_1.default.instance.setLanguage("en");
        });
    };
    Localize.prototype.onClickClose = function () {
        // dùng ViewManager để đóng UI theo hệ thống của game
        ViewManager_1.default.instance.hide("Game/Localize");
    };
    __decorate([
        property(cc.Button)
    ], Localize.prototype, "btnVi", void 0);
    __decorate([
        property(cc.Button)
    ], Localize.prototype, "btnEn", void 0);
    __decorate([
        property(cc.Node)
    ], Localize.prototype, "btnClose", void 0);
    Localize = __decorate([
        ccclass
    ], Localize);
    return Localize;
}(cc.Component));
exports.default = Localize;

cc._RF.pop();