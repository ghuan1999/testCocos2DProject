"use strict";
cc._RF.push(module, '80fd3Nn4dFF45QylMONs3ro', 'WxRankDialog');
// framework/wxsdk/WxRankDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../Platform");
var View_1 = require("../plugin_boosts/ui/View");
var ViewManager_1 = require("../plugin_boosts/ui/ViewManager");
var Signal_1 = require("../plugin_boosts/misc/Signal");
var Info_1 = require("../../Game/Scripts/Info");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WxRankDialog = /** @class */ (function (_super) {
    __extends(WxRankDialog, _super);
    function WxRankDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.first = true;
        _this.rankItems = [];
        _this.rankItemPrefab = null;
        _this.display = null;
        _this.top10Data = [];
        _this.currentUser = { rank: 0, level: Info_1.UserInfo.level, name: "You" };
        _this.closeSignal = new Signal_1.default();
        return _this;
    }
    WxRankDialog.prototype.onShown = function (callback, target) {
        this.closeSignal.on(callback, target);
        if (this.first) {
            this.scheduleOnce(this.reOpen, 0.1);
        }
        else {
            Platform_1.default.showRank();
        }
    };
    WxRankDialog.prototype.reOpen = function () {
        Platform_1.default.showRank();
        this.first = false;
        this.getComponent(View_1.default).hide();
        // setTimeout(() => {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
        // }, 100);
    };
    WxRankDialog.prototype.click_close = function () {
        Platform_1.default.hideRank();
        this.getComponent(View_1.default).hide();
        this.closeSignal.fire();
    };
    WxRankDialog.prototype.onLoad = function () {
        this.loadTop10Data();
    };
    WxRankDialog.prototype.loadTop10Data = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, rankData, top10Data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("HTTP error! Status: " + response.status);
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        rankData = data.map(function (item) { return ({
                            rank: 0,
                            level: Number(item.level),
                            name: item.name
                        }); });
                        // Thêm user hiện tại
                        rankData.push(this.currentUser);
                        // Sort giảm dần theo level
                        rankData.sort(function (a, b) { return b.level - a.level; });
                        // Gán rank
                        rankData.forEach(function (item, index) { return item.rank = index + 1; });
                        top10Data = rankData.slice(0, 10);
                        this.updateRankList(top10Data);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error fetching top data:', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /** Cập nhật label cho node */
    WxRankDialog.prototype.updateRankList = function (top10Data) {
        var _this = this;
        var startY = 250; // ví dụ vị trí top
        var gapY = 60;
        top10Data.forEach(function (data, i) {
            var _a, _b, _c;
            var node = _this.rankItems[i];
            if (!node)
                return;
            node.active = true;
            node.setPosition(-20, startY - i * gapY);
            var rankLabel = (_a = node.getChildByName("RankLabel")) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Label);
            var nameLabel = (_b = node.getChildByName("NameLabel")) === null || _b === void 0 ? void 0 : _b.getComponent(cc.Label);
            var levelLabel = (_c = node.getChildByName("LevelLabel")) === null || _c === void 0 ? void 0 : _c.getComponent(cc.Label);
            if (rankLabel)
                rankLabel.string = data.rank.toString();
            if (nameLabel)
                nameLabel.string = data.name;
            if (levelLabel)
                levelLabel.string = data.level.toString();
        });
    };
    __decorate([
        property([cc.Node])
    ], WxRankDialog.prototype, "rankItems", void 0);
    __decorate([
        property(cc.Prefab)
    ], WxRankDialog.prototype, "rankItemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], WxRankDialog.prototype, "display", void 0);
    WxRankDialog = __decorate([
        ccclass
    ], WxRankDialog);
    return WxRankDialog;
}(cc.Component));
exports.default = WxRankDialog;

cc._RF.pop();