
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/WxRankDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcV3hSYW5rRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsaURBQTRDO0FBQzVDLCtEQUEwRDtBQUUxRCx1REFBa0Q7QUFFbEQsZ0RBQW1EO0FBUTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUdDO1FBakdHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUcxQixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBZSxFQUFFLENBQUM7UUFFM0IsaUJBQVcsR0FBYSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBRXhFLGlCQUFXLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7O0lBa0YvQixDQUFDO0lBakZHLDhCQUFPLEdBQVAsVUFBUSxRQUFRLEVBQUUsTUFBTTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3RDO2FBQU07WUFDSCxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZCO0lBRUwsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FB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QyxXQUFXLENBQUMsMENBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRSxJQUFNLFVBQVUsU0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywwQ0FBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdFLElBQUksU0FBUztnQkFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkQsSUFBSSxTQUFTO2dCQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLFVBQVU7Z0JBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdGRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzttREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ007SUFYUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUdoQztJQUFELG1CQUFDO0NBbkdELEFBbUdDLENBbkd5QyxFQUFFLENBQUMsU0FBUyxHQW1HckQ7a0JBbkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi9QbGF0Zm9ybVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3BsdWdpbl9ib29zdHMvdWkvVmlld1wiO1xuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tbW9uIGZyb20gXCIuLi9wbHVnaW5fYm9vc3RzL3V0aWxzL0NvbW1vblwiO1xuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vcGx1Z2luX2Jvb3N0cy9taXNjL1NpZ25hbFwiO1xuaW1wb3J0IFJhbmtJdGVtIGZyb20gXCIuL1JhbmtJdGVtXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi9HYW1lL1NjcmlwdHMvSW5mb1wiO1xuXG5pbnRlcmZhY2UgUmFua0RhdGEge1xuICAgIHJhbms6IG51bWJlcjtcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4UmFua0RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBmaXJzdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHJhbmtJdGVtczogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHJhbmtJdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGlzcGxheTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICB0b3AxMERhdGE6IFJhbmtEYXRhW10gPSBbXTtcblxuICAgIGN1cnJlbnRVc2VyOiBSYW5rRGF0YSA9IHsgcmFuazogMCwgbGV2ZWw6IFVzZXJJbmZvLmxldmVsLCBuYW1lOiBcIllvdVwiIH07XG5cbiAgICBjbG9zZVNpZ25hbCA9IG5ldyBTaWduYWwoKTtcbiAgICBvblNob3duKGNhbGxiYWNrLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZVNpZ25hbC5vbihjYWxsYmFjaywgdGFyZ2V0KVxuICAgICAgICBpZiAodGhpcy5maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5yZU9wZW4sIDAuMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsYXRmb3JtLnNob3dSYW5rKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlT3BlbigpIHtcbiAgICAgICAgUGxhdGZvcm0uc2hvd1JhbmsoKTtcbiAgICAgICAgdGhpcy5maXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwid2VjaGF0L1d4UmFua0RpYWxvZ1wiKTtcbiAgICAgICAgLy8gfSwgMTAwKTtcbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgUGxhdGZvcm0uaGlkZVJhbmsoKTtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoVmlldykuaGlkZSgpO1xuICAgICAgICB0aGlzLmNsb3NlU2lnbmFsLmZpcmUoKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFRvcDEwRGF0YSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRUb3AxMERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovLzVkODIwZjE3MWM4ZmY3MDAxNGVmNDM4ZC5tb2NrYXBpLmlvLzEvcmFua2luZy1saXN0JztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55W10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIC8vIE1hcCBk4buvIGxp4buHdSB2w6Agw6lwIGxldmVsIHRow6BuaCBudW1iZXJcbiAgICAgICAgICAgIGxldCByYW5rRGF0YTogUmFua0RhdGFbXSA9IGRhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICByYW5rOiAwLFxuICAgICAgICAgICAgICAgIGxldmVsOiBOdW1iZXIoaXRlbS5sZXZlbCksXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIC8vIFRow6ptIHVzZXIgaGnhu4duIHThuqFpXG4gICAgICAgICAgICByYW5rRGF0YS5wdXNoKHRoaXMuY3VycmVudFVzZXIpO1xuXG4gICAgICAgICAgICAvLyBTb3J0IGdp4bqjbSBk4bqnbiB0aGVvIGxldmVsXG4gICAgICAgICAgICByYW5rRGF0YS5zb3J0KChhLCBiKSA9PiBiLmxldmVsIC0gYS5sZXZlbCk7XG5cbiAgICAgICAgICAgIC8vIEfDoW4gcmFua1xuICAgICAgICAgICAgcmFua0RhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0ucmFuayA9IGluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgIC8vIEzhuqV5IHRvcCAxMFxuICAgICAgICAgICAgY29uc3QgdG9wMTBEYXRhID0gcmFua0RhdGEuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhbmtMaXN0KHRvcDEwRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b3AgZGF0YTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQ+G6rXAgbmjhuq10IGxhYmVsIGNobyBub2RlICovXG4gICAgdXBkYXRlUmFua0xpc3QodG9wMTBEYXRhOiBSYW5rRGF0YVtdKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IDI1MDsgLy8gdsOtIGThu6UgduG7iyB0csOtIHRvcFxuICAgICAgICBjb25zdCBnYXBZID0gNjA7XG4gICAgICAgIHRvcDEwRGF0YS5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5yYW5rSXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oLTIwLCBzdGFydFkgLSBpICogZ2FwWSlcblxuICAgICAgICAgICAgY29uc3QgcmFua0xhYmVsID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJhbmtMYWJlbFwiKT8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lTGFiZWxcIik/LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBjb25zdCBsZXZlbExhYmVsID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxldmVsTGFiZWxcIik/LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChyYW5rTGFiZWwpIHJhbmtMYWJlbC5zdHJpbmcgPSBkYXRhLnJhbmsudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChuYW1lTGFiZWwpIG5hbWVMYWJlbC5zdHJpbmcgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICBpZiAobGV2ZWxMYWJlbCkgbGV2ZWxMYWJlbC5zdHJpbmcgPSBkYXRhLmxldmVsLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==