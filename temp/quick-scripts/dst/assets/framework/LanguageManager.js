
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/LanguageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxMYW5ndWFnZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBaUVDO1FBN0RHLG9CQUFvQjtRQUNaLGlCQUFXLEdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVztRQUUvQyxxQkFBcUI7UUFDYixnQkFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxVQUFVO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLFNBQVM7YUFDcEI7U0FDSixDQUFDOztJQXdDTixDQUFDO3dCQWpFb0IsZUFBZTtJQTJCaEMsZ0NBQU0sR0FBTjtRQUNJLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQyxxQ0FBcUM7UUFDckMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQWUsQ0FBQyxDQUFDO1lBQ3BFLE9BQU87U0FDVjtRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUMsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsR0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzs7SUE5RE0sd0JBQVEsR0FBb0IsSUFBSSxDQUFDO0lBRnZCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FpRW5DO0lBQUQsc0JBQUM7Q0FqRUQsQUFpRUMsQ0FqRTRDLEVBQUUsQ0FBQyxTQUFTLEdBaUV4RDtrQkFqRW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IExhbmd1YWdlTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgLy8gTmfDtG4gbmfhu68gaGnhu4duIHThuqFpXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMYW5nOiBzdHJpbmcgPSBcInZpXCI7IC8vIG3hurdjIMSR4buLbmhcclxuXHJcbiAgICAvLyBC4bqjbmcgdGV4dCB0aGVvIGtleVxyXG4gICAgcHJpdmF0ZSBkaWN0aW9uYXJ5OiBhbnkgPSB7XHJcbiAgICAgICAgXCJ2aVwiOiB7XHJcbiAgICAgICAgICAgIFwicGxheVwiOiBcIkNoxqFpXCIsXHJcbiAgICAgICAgICAgIFwiZXhpdFwiOiBcIlRob8OhdFwiLFxyXG4gICAgICAgICAgICBcIndpblwiOiBcIkNoaeG6v24gVGjhuq9uZyFcIixcclxuICAgICAgICAgICAgXCJsb3NlXCI6IFwiVGh1YSBy4buTaSFcIixcclxuICAgICAgICAgICAgXCJza2luXCI6IFwiU2tpblwiLFxyXG4gICAgICAgICAgICBcInJhbmtcIjogXCJY4bq/cCBo4bqhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcInBsYXlcIjogXCJQbGF5XCIsXHJcbiAgICAgICAgICAgIFwiZXhpdFwiOiBcIkV4aXRcIixcclxuICAgICAgICAgICAgXCJ3aW5cIjogXCJZb3UgV2luIVwiLFxyXG4gICAgICAgICAgICBcImxvc2VcIjogXCJZb3UgTG9zZSFcIixcclxuICAgICAgICAgICAgXCJza2luXCI6IFwiU2tpblwiLFxyXG4gICAgICAgICAgICBcInJhbmtcIjogXCJSYW5raW5nXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gTOG6pXkgbmfDtG4gbmfhu68gbMawdSBs4bqnbiBjdeG7kWkgKG7hur91IGPDsylcclxuICAgICAgICBsZXQgc2F2ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nXCIpO1xyXG4gICAgICAgIGlmIChzYXZlZCkgdGhpcy5jdXJyZW50TGFuZyA9IHNhdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMYWJlbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0xvY2FsaXplTGFiZWxdIE5vZGUgJHt0aGlzLm5vZGUubmFtZX0gY2jGsGEgY8OzIGtleSFgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmdldFRleHQodGhpcy5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5nXCIsIGxhbmcpO1xyXG5cclxuICAgICAgICAvLyBCcm9hZGNhc3QgZXZlbnQgxJHhu5VpIG5nw7RuIG5n4buvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZW1pdChcIkxBTkdVQUdFX0NIQU5HRURcIiwgbGFuZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeVt0aGlzLmN1cnJlbnRMYW5nXVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhbmd1YWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==