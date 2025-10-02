
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/PauseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83fb9osUoVEppfk8B6mkJYV', 'PauseDialog');
// Game/Scripts/ui/PauseDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../../../framework/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PauseDialog = /** @class */ (function (_super) {
    __extends(PauseDialog, _super);
    function PauseDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PauseDialog.prototype.onLoad = function () { };
    PauseDialog.prototype.start = function () { };
    PauseDialog.prototype.click_share = function () {
        Platform_1.default.share();
    };
    PauseDialog.prototype.click_home = function () {
        console.log("clicked");
        cc.director.loadScene("Main");
    };
    PauseDialog.prototype.click_restart = function () {
        cc.director.loadScene("Game");
    };
    PauseDialog = __decorate([
        ccclass
    ], PauseDialog);
    return PauseDialog;
}(cc.Component));
exports.default = PauseDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFBhdXNlRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFN0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBc0JBLENBQUM7SUFwQkcsNEJBQU0sR0FBTixjQUFXLENBQUM7SUFDWiwyQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUdYLGlDQUFXLEdBQVg7UUFFSSxrQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBR0QsbUNBQWEsR0FBYjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFyQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzQi9CO0lBQUQsa0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QndDLEVBQUUsQ0FBQyxTQUFTLEdBc0JwRDtrQkF0Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHt9XG5cblxuICAgIGNsaWNrX3NoYXJlKClcbiAgICB7XG4gICAgICAgIFBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfaG9tZSgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiKVxuICAgIH1cblxuXG4gICAgY2xpY2tfcmVzdGFydCgpXG4gICAge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpXG4gICAgfVxufSJdfQ==