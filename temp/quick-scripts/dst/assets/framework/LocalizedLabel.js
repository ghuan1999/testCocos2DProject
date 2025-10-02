
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/LocalizedLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1251bWUHK9KdL9PaFl84d5+', 'LocalizedLabel');
// framework/LocalizedLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LanguageManager_1 = require("./LanguageManager");
var LocalizedLabel = /** @class */ (function (_super) {
    __extends(LocalizedLabel, _super);
    function LocalizedLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = "";
        _this.label = null;
        return _this;
        // updateLabel() {
        //     if (this.label) {
        //         this.label.string = LanguageManager.instance.getText(this.key);
        //     }
        // }
    }
    LocalizedLabel.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
        // Lắng nghe sự kiện đổi ngôn ngữ
        cc.director.on("LANGUAGE_CHANGED", this.updateLabel, this);
        this.updateLabel();
    };
    LocalizedLabel.prototype.onEnable = function () {
        this.updateLabel();
    };
    LocalizedLabel.prototype.updateLabel = function () {
        if (!this.key) {
            console.warn("[LocalizeLabel] Node " + this.node.name + " ch\u01B0a c\u00F3 key!");
            return;
        }
        var label = this.getComponent(cc.Label);
        if (label) {
            label.string = LanguageManager_1.default.instance.getText(this.key);
        }
    };
    __decorate([
        property
    ], LocalizedLabel.prototype, "key", void 0);
    LocalizedLabel = __decorate([
        ccclass
    ], LocalizedLabel);
    return LocalizedLabel;
}(cc.Component));
exports.default = LocalizedLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxMb2NhbGl6ZWRMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBb0NDO1FBakNHLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFFVCxXQUFLLEdBQWEsSUFBSSxDQUFDOztRQTBCL0Isa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QiwwRUFBMEU7UUFDMUUsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBN0JHLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLGlDQUFpQztRQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUFlLENBQUMsQ0FBQztZQUNwRSxPQUFPO1NBQ1Y7UUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssRUFBRTtZQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUExQkQ7UUFEQyxRQUFROytDQUNRO0lBSEEsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9DbEM7SUFBRCxxQkFBQztDQXBDRCxBQW9DQyxDQXBDMkMsRUFBRSxDQUFDLFNBQVMsR0FvQ3ZEO2tCQXBDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIgZnJvbSBcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGl6ZWRMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBrZXk6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyBM4bqvbmcgbmdoZSBz4buxIGtp4buHbiDEkeG7lWkgbmfDtG4gbmfhu69cclxuICAgICAgICBjYy5kaXJlY3Rvci5vbihcIkxBTkdVQUdFX0NIQU5HRURcIiwgdGhpcy51cGRhdGVMYWJlbCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGFiZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtMb2NhbGl6ZUxhYmVsXSBOb2RlICR7dGhpcy5ub2RlLm5hbWV9IGNoxrBhIGPDsyBrZXkhYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5nZXRUZXh0KHRoaXMua2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlTGFiZWwoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuZ2V0VGV4dCh0aGlzLmtleSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==