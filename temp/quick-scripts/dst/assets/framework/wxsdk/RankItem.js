
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/RankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24f95v/AbVISLQVQ0D4i0Vs', 'RankItem');
// framework/wxsdk/RankItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankItem = /** @class */ (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankLabel = null;
        _this.nameLabel = null;
        _this.scoreLabel = null;
        return _this;
    }
    RankItem.prototype.setData = function (rank, name, level) {
        this.rankLabel.string = rank.toString();
        this.nameLabel.string = name;
        this.scoreLabel.string = level.toString();
        console.log("SetData OK:", this.rankLabel.string, this.nameLabel.string, this.scoreLabel.string);
    };
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "rankLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "scoreLabel", void 0);
    RankItem = __decorate([
        ccclass
    ], RankItem);
    return RankItem;
}(cc.Component));
exports.default = RankItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcUmFua0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0JDO1FBZkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztJQVNoQyxDQUFDO0lBUEcsMEJBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQVRYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQjVCO0lBQUQsZUFBQztDQWxCRCxBQWtCQyxDQWxCcUMsRUFBRSxDQUFDLFNBQVMsR0FrQmpEO2tCQWxCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmFua0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHNldERhdGEocmFuazogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJhbmtMYWJlbC5zdHJpbmcgPSByYW5rLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gbGV2ZWwudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNldERhdGEgT0s6XCIsIHRoaXMucmFua0xhYmVsLnN0cmluZywgdGhpcy5uYW1lTGFiZWwuc3RyaW5nLCB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19