
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/Localize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExvY2FsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBMEU7QUFDMUUsc0VBQWlFO0FBRzNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBN0JHLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQXVCN0IsQ0FBQztJQXJCRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEIseUJBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN4Qix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsK0JBQVksR0FBWjtRQUNJLHFEQUFxRDtRQUNyRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQVRSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQzVCO0lBQUQsZUFBQztDQWhDRCxBQWdDQyxDQWhDcUMsRUFBRSxDQUFDLFNBQVMsR0FnQ2pEO2tCQWhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGl6ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0blZpOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5FbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tDbG9zZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYnRuVmkubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLnNldExhbmd1YWdlKFwidmlcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuRW4ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLnNldExhbmd1YWdlKFwiZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICAvLyBkw7luZyBWaWV3TWFuYWdlciDEkeG7gyDEkcOzbmcgVUkgdGhlbyBo4buHIHRo4buRbmcgY+G7p2EgZ2FtZVxyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLmhpZGUoXCJHYW1lL0xvY2FsaXplXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==