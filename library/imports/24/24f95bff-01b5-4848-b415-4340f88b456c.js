"use strict";
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