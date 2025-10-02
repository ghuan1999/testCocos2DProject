"use strict";
cc._RF.push(module, '0657fBhvFRAPrXwon4h6VBZ', 'LocalizedSprite');
// framework/LocalizedSprite.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LanguageManager_1 = require("./LanguageManager");
var LocalizedSprite = /** @class */ (function (_super) {
    __extends(LocalizedSprite, _super);
    function LocalizedSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vi = null;
        _this.en = null;
        _this.sprite = null;
        return _this;
    }
    LocalizedSprite.prototype.onLoad = function () {
        this.sprite = this.getComponent(cc.Sprite);
        cc.director.on("LANGUAGE_CHANGED", this.updateSprite, this);
        this.updateSprite();
    };
    LocalizedSprite.prototype.updateSprite = function () {
        var lang = LanguageManager_1.default.instance.getLanguage();
        if (lang === "vi" && this.vi) {
            this.sprite.spriteFrame = this.vi;
        }
        else if (lang === "en" && this.en) {
            this.sprite.spriteFrame = this.en;
        }
    };
    __decorate([
        property({ type: cc.SpriteFrame })
    ], LocalizedSprite.prototype, "vi", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], LocalizedSprite.prototype, "en", void 0);
    LocalizedSprite = __decorate([
        ccclass
    ], LocalizedSprite);
    return LocalizedSprite;
}(cc.Component));
exports.default = LocalizedSprite;

cc._RF.pop();