"use strict";
cc._RF.push(module, 'f40c6YY+rxLg71KTiruJi+1', 'LanguageManager');
// framework/LanguageManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LanguageManager = /** @class */ (function (_super) {
    __extends(LanguageManager, _super);
    function LanguageManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Ngôn ngữ hiện tại
        _this.currentLang = "vi"; // mặc định
        // Bảng text theo key
        _this.dictionary = {
            "vi": {
                "play": "Chơi",
                "exit": "Thoát",
                "win": "Chiến Thắng!",
                "lose": "Thua rồi!",
                "skin": "Skin",
                "rank": "Xếp hạng",
            },
            "en": {
                "play": "Play",
                "exit": "Exit",
                "win": "You Win!",
                "lose": "You Lose!",
                "skin": "Skin",
                "rank": "Ranking",
            }
        };
        return _this;
    }
    LanguageManager_1 = LanguageManager;
    LanguageManager.prototype.onLoad = function () {
        LanguageManager_1.instance = this;
        // Lấy ngôn ngữ lưu lần cuối (nếu có)
        var saved = cc.sys.localStorage.getItem("lang");
        if (saved)
            this.currentLang = saved;
    };
    LanguageManager.prototype.onEnable = function () {
        this.updateLabel();
    };
    LanguageManager.prototype.updateLabel = function () {
        if (!this.key) {
            console.warn("[LocalizeLabel] Node " + this.node.name + " ch\u01B0a c\u00F3 key!");
            return;
        }
        var label = this.getComponent(cc.Label);
        if (label) {
            label.string = LanguageManager_1.instance.getText(this.key);
        }
    };
    LanguageManager.prototype.setLanguage = function (lang) {
        this.currentLang = lang;
        cc.sys.localStorage.setItem("lang", lang);
        // Broadcast event đổi ngôn ngữ
        cc.director.emit("LANGUAGE_CHANGED", lang);
    };
    LanguageManager.prototype.getText = function (key) {
        return this.dictionary[this.currentLang][key];
    };
    LanguageManager.prototype.getLanguage = function () {
        return this.currentLang;
    };
    var LanguageManager_1;
    LanguageManager.instance = null;
    LanguageManager = LanguageManager_1 = __decorate([
        ccclass
    ], LanguageManager);
    return LanguageManager;
}(cc.Component));
exports.default = LanguageManager;

cc._RF.pop();