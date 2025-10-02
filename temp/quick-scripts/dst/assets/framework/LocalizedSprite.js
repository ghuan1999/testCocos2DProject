
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/LocalizedSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxMb2NhbGl6ZWRTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHFEQUFnRDtBQUdoRDtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXdCQztRQXJCRyxRQUFFLEdBQW1CLElBQUksQ0FBQztRQUcxQixRQUFFLEdBQW1CLElBQUksQ0FBQztRQUVsQixZQUFNLEdBQWMsSUFBSSxDQUFDOztJQWdCckMsQ0FBQztJQWRHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBTSxJQUFJLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzsrQ0FDVDtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7K0NBQ1Q7SUFOVCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0JuQztJQUFELHNCQUFDO0NBeEJELEFBd0JDLENBeEI0QyxFQUFFLENBQUMsU0FBUyxHQXdCeEQ7a0JBeEJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciBmcm9tIFwiLi9MYW5ndWFnZU1hbmFnZXJcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsaXplZFNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcclxuICAgIHZpOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcclxuICAgIGVuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5vbihcIkxBTkdVQUdFX0NIQU5HRURcIiwgdGhpcy51cGRhdGVTcHJpdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3ByaXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3ByaXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGxhbmcgPSBMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgICAgICBpZiAobGFuZyA9PT0gXCJ2aVwiICYmIHRoaXMudmkpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnZpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGFuZyA9PT0gXCJlblwiICYmIHRoaXMuZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=