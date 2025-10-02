"use strict";
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